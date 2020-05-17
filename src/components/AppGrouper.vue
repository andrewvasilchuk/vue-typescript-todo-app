<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'AppGrouper',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, slots, data }) {
    const { tag } = props
    const { left, right } = slots()

    return h(tag, mergeData(data, { staticClass: 'grouper' }), [
      h('div', { staticClass: 'grouper__inner' }, [
        left !== undefined
          ? h('div', { staticClass: 'grouper__left' }, left)
          : null,

        right !== undefined
          ? h('div', { staticClass: 'grouper__right' }, right)
          : null,
      ]),
    ])
  },
})
</script>

<style lang="scss">
.grouper {
  &__inner {
    display: flex;
    align-items: center;

    @include from-xs-to-lg() {
      flex-wrap: wrap;
    }
  }

  &__left {
    display: flex;
    align-items: center;

    @include lg() {
      margin-right: $default-spacing;
    }
  }

  &__right {
    margin-left: auto;

    @include from-xs-to-lg() {
      display: flex;
      width: 100%;
      margin-top: $default-spacing;
      justify-content: center;
    }
  }
}
</style>
