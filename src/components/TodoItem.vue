<template>
  <component :is="tag" class="todo-item">
    <div
      :class="['todo-item__inner', { 'todo-item__inner--padding': padding }]"
    >
      <div v-if="hasSlot('prepend')" class="todo-item__prepend">
        <slot name="prepend"></slot>
      </div>
      <p class="todo-item__title">{{ item.title }}</p>
      <div v-if="hasSlot('default')" class="todo-item__slot"><slot></slot></div>
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Todo } from '../types'

export default Vue.extend({
  name: 'TodoItem',
  props: {
    item: {
      type: Object as () => Todo,
      required: true,
    },
    tag: {
      type: String,
      default: 'li',
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hasSlot(name: string) {
      return (
        this.$slots[name] !== undefined || this.$scopedSlots[name] !== undefined
      )
    },
  },
})
</script>

<style lang="scss">
.todo-item {
  &__title {
    flex-grow: 1;
    margin: {
      top: 0;
      bottom: 0;
    }
    font-size: 14px;
  }

  &__inner {
    display: flex;
    align-items: center;

    &--padding {
      padding: $default-spacing / 2 $default-spacing;
    }
  }

  &__prepend {
    margin-right: $default-spacing;
    flex-shrink: 0;
  }

  &__slot {
    margin-left: $default-spacing / 2;
    flex-shrink: 0;
  }
}
</style>
