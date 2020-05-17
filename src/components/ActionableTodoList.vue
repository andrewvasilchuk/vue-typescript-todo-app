<template>
  <ul class="actionable-todo-list">
    <ActionableTodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      class="actionable-todo-list__item"
      @edit="editHandler"
      @state="stateHandler"
      @delete="deleteHandler"
    ></ActionableTodoItem>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { Todo } from '@/types'
import ActionableTodoItem from '@/components/ActionableTodoItem.vue'

export default Vue.extend({
  name: 'TodoList',
  components: {
    ActionableTodoItem,
  },
  props: {
    items: {
      type: Array as () => Todo[],
      required: true,
    },
  },
  methods: {
    editHandler(id: string) {
      this.$emit('edit', id)
    },
    stateHandler({ id, value }: { id: string; value: boolean }) {
      this.$emit('state', { id, value })
    },
    deleteHandler(id: string) {
      this.$emit('delete', id)
    },
  },
})
</script>

<style lang="scss">
.actionable-todo-list {
  @include reset-list();
  border-radius: $default-border-radius;
  border: 1px solid $default-border-color;

  &__item + &__item {
    border-top: 1px solid $default-border-color;
  }
}
</style>
