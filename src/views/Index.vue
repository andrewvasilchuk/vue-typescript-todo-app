<template>
  <base-container>
    <section>
      <base-button
        theme="success"
        circle
        type="button"
        class="page__fab"
        arai-label="Create note"
        @click="createNoteHandler"
        ><svg-icon name="plus"></svg-icon
      ></base-button>
      <NotesList
        v-if="notes.length > 0"
        :notes="notes"
        @delete="confirmableDeleteHandler"
      ></NotesList>
      <template v-else>
        <base-alert class="mb-default"
          >You have not got any notes yet. You can create a note by clicking the
          button at the right bottom corner of the page or at the button
          below.</base-alert
        >
        <base-button
          theme="success"
          class="xs-lg:w-full"
          @click="createNoteHandler"
          >Create</base-button
        >
      </template>
    </section>
  </base-container>
</template>

<script lang="ts">
import Vue from 'vue'
import NoteCreationModal from '@/components/modals/NoteCreationModal.vue'
import NotesList from '@/components/NotesList.vue'
import { MutationTypes } from '@/store/mutation-types'

export default Vue.extend({
  name: 'Home',
  components: {
    NotesList,
  },
  computed: {
    notes() {
      return this.$store.state.notes
    },
  },
  methods: {
    createNoteHandler() {
      this.$modal.show(NoteCreationModal, {
        listeners: {
          create: ({ name }: { name: string }) => {
            this.$store.commit(MutationTypes.ADD_NOTE, { name })
          },
        },
      })
    },
    deleteNoteHandler(id: string) {
      this.$store.commit(MutationTypes.DELETE_NOTE, id)
    },
    confirmableDeleteHandler(id: string) {
      this.$confirm('Are you sure you want to delete this note?')
        .then(() => this.deleteNoteHandler(id))
        .catch(() => {
          // handle rejection
        })
    },
  },
})
</script>
