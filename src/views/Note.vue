<template>
  <base-container>
    <section>
      <app-grouper class="mb-default">
        <template #left>
          <base-button
            circle
            class="flex-shrink-0 mr-default"
            aria-label="Cancel"
            @click="cancelHandler"
            ><svg-icon name="arrow-left"></svg-icon
          ></base-button>
          <h1 class="page__title">{{ note.name }}</h1>
        </template>
        <template #right>
          <base-button
            v-if="canUnexecute()"
            circle
            type="button"
            class="actions__action"
            aria-label="Undo"
            @click="unexecute"
            ><svg-icon name="undo"></svg-icon
          ></base-button>
          <base-button
            v-if="canExecute()"
            circle
            type="button"
            class="actions__action"
            aria-label="Redo"
            @click="execute"
            ><svg-icon name="redo"></svg-icon
          ></base-button>
          <base-button
            theme="primary"
            plain
            circle
            type="button"
            class="actions__action"
            aria-label="Edit note's name"
            @click="editNoteNameHandler"
            ><svg-icon name="edit"></svg-icon
          ></base-button>
          <base-button
            v-if="canSave()"
            theme="success"
            plain
            circle
            type="button"
            class="actions__action"
            aria-label="Save note's state"
            @click="saveHandler"
            ><svg-icon name="save"></svg-icon
          ></base-button>
          <base-button
            theme="danger"
            plain
            circle
            type="button"
            class="actions__action"
            aria-label="Delete note"
            @click="deleteNoteHandler"
            ><svg-icon name="trash"></svg-icon
          ></base-button>
          <base-button
            type="button"
            theme="success"
            circle
            class="actions__action"
            aria-label="Create todo"
            @click="createTodoHandler"
            ><svg-icon name="plus"></svg-icon
          ></base-button>
        </template>
      </app-grouper>
      <div v-if="note.tasks.length > 0" class="mt-default">
        <ActionableTodoList
          :items="note.tasks"
          @edit="todoEditHandler"
          @state="todoStateHandler"
          @delete="todoDeleteHandler"
        ></ActionableTodoList>
      </div>
      <template v-else>
        <base-alert class="mb-default"
          >The note has not got any tasks yet. You can create a task by clicking
          the button at the right bottom corner of the page or at the button
          below.</base-alert
        >
        <base-button theme="success" type="button" @click="createTodoHandler"
          >Create</base-button
        >
      </template>
      <base-button
        type="button"
        theme="success"
        circle
        class="page__fab"
        aria-label="Create todo"
        @click="createTodoHandler"
        ><svg-icon name="plus"></svg-icon
      ></base-button>
    </section>
  </base-container>
</template>

<script lang="ts">
import Vue from 'vue'
import cloneDeep from 'lodash.clonedeep'
import AppGrouper from '@/components/AppGrouper.vue'
import ActionableTodoList from '@/components/ActionableTodoList.vue'
import TodoCreationModal from '@/components/modals/TodoCreationModal.vue'
import TodoEditionModal from '@/components/modals/TodoEditionModal.vue'
import NoteEditionModal from '@/components/modals/NoteEditionModal.vue'
import { MutationTypes } from '../store/mutation-types'
import { NoteManager } from '@/entities/NoteManager'
import { Note } from '../types'

export default Vue.extend({
  name: 'NotePage',
  components: {
    AppGrouper,
    ActionableTodoList,
  },
  data() {
    const note: Note | undefined = this.$store.getters.getNoteById(
      this.$route.params.id
    )

    if (note === undefined) {
      this.$router.push({ name: '404' })
    } else {
      const clonedNote = cloneDeep(note)

      return {
        note: clonedNote,
        noteManager: new NoteManager(clonedNote),
      }
    }
  },
  methods: {
    editNoteNameHandler() {
      this.$modal.show(NoteEditionModal, {
        props: { name: this.note.name },
        listeners: {
          edit: ({ name }: { name: string }) => {
            this.noteManager.setName(name)
          },
        },
      })
    },
    deleteNoteHandler() {
      this.$confirm('Are you sure you want to delete this note?')
        .then(() => {
          this.$store.commit(MutationTypes.DELETE_NOTE, this.note.id)
          this.$router.replace('/')
        })
        .catch()
    },
    createTodoHandler() {
      this.$modal.show(TodoCreationModal, {
        listeners: {
          create: ({ title }: { title: string }) => {
            this.noteManager.addTodo(title)
          },
        },
      })
    },
    todoEditHandler(id: string) {
      const todo = this.note.tasks.find(task => task.id === id)
      if (todo !== undefined) {
        const { title } = todo
        this.$modal.show(TodoEditionModal, {
          props: { title },
          listeners: {
            edit: ({ title }: { title: string }) => {
              this.noteManager.setTodoTitle(todo.id, title)
            },
          },
        })
      }
    },
    todoStateHandler({ id, value }: { id: string; value: boolean }) {
      this.noteManager.setTodoState(id, value)
    },
    todoDeleteHandler(id: string) {
      this.$confirm('Are you sure you want to delete this task?')
        .then(() => {
          this.noteManager.deleteTodo(id)
        })
        .catch(() => {
          // handle rejection
        })
    },
    cancelHandler() {
      this.$confirm(
        'Are you sure you want to leave? All unsaved changes will be lost!'
      )
        .then(() => {
          this.$router.push({ name: 'Index' })
        })
        .catch(() => {
          // handle rejection
        })
    },
    saveHandler() {
      this.$store.commit(MutationTypes.PATCH_NOTE, this.note)
    },
    execute() {
      this.noteManager.execute()
    },
    unexecute() {
      this.noteManager.unexecute()
    },
    canExecute() {
      return this.noteManager.canExecute()
    },
    canUnexecute() {
      return this.noteManager.canUnexecute()
    },
    canSave() {
      return this.noteManager.canSave()
    },
  },
})
</script>

<style lang="scss">
.actions {
  &__action + &__action {
    margin-left: $default-spacing / 2;
  }
}
</style>
