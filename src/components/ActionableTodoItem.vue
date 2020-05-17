<template>
  <TodoItem class="todo-item--actionable" :item="item">
    <template #prepend>
      <base-checkbox v-model="state">Toggle task state</base-checkbox>
    </template>
    <div class="todo-tem__actions">
      <base-button
        theme="primary"
        plain
        circle
        class="todo-item__action"
        @click="editHandler"
        ><svg-icon name="edit"></svg-icon
      ></base-button>
      <base-button
        theme="danger"
        plain
        circle
        class="todo-item__action"
        @click="deleteHandler"
        ><svg-icon name="trash"></svg-icon
      ></base-button>
    </div>
  </TodoItem>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { Todo } from '@/types'
import TodoItem from '@/components/TodoItem.vue'

export default Vue.extend({
  name: 'ActionableTodoItem',
  components: {
    TodoItem,
  },
  props: {
    item: {
      type: Object as () => Todo,
      required: true,
    },
  },
  computed: {
    state: {
      get(): boolean {
        return this.item.completed
      },
      set(value: boolean) {
        this.$emit('state', { id: this.item.id, value })
      },
    },
  },
  methods: {
    editHandler() {
      this.$emit('edit', this.item.id)
    },
    deleteHandler() {
      this.$emit('delete', this.item.id)
    },
  },
})
</script>

<style lang="scss">
.todo-item {
  &__action + &__action {
    margin-left: $default-spacing / 2;
  }
}
</style>
