<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { Todo } from '@/types'
import TodoItem from '@/components/TodoItem.vue'

const COUNT = 4

export default Vue.extend({
  name: 'SimpleTodoList',
  functional: true,
  props: {
    count: {
      type: Number,
      default: Infinity,
    },
    items: {
      type: Array as () => Todo[],
      required: true,
    },
  },
  render(h, { props, data }) {
    const items = props.items.slice(0, props.count + 1)

    return h(
      'ul',
      mergeData(data, { staticClass: 'simple-todo-list' }),
      items.map(item =>
        h(TodoItem, {
          props: { item, padding: false },
          staticClass: 'simple-todo-list__item',
        })
      )
    )
  },
})
</script>

<style lang="scss">
.simple-todo-list {
  @include reset-list();

  &__item + &__item {
    margin-top: 4px;
  }
}
</style>
