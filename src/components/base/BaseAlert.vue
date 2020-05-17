<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import SvgIcon from '@/components/base/SvgIcon.vue'

export default Vue.extend({
  name: 'BaseAlert',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, children, data }) {
    const { tag } = props

    return h(tag, mergeData(data, { staticClass: 'alert' }), [
      h('div', { staticClass: 'alert__inner' }, [
        h('div', { staticClass: 'alert__prepend' }, [
          h(SvgIcon, { props: { name: 'info' }, staticClass: 'alert__icon' }),
        ]),

        h('div', { staticClass: 'alert__slot' }, children),
      ]),
    ])
  },
})
</script>

<style lang="scss">
.alert {
  padding: 12px $default-spacing;
  border-radius: $default-border-radius;
  background-color: rgba($color-primary, 0.12);

  &__inner {
    display: flex;
    align-items: center;
  }

  &__prepend {
    flex-shrink: 0;
    margin-right: $default-spacing / 2;

    svg {
      @include box(20px);
      color: $color-primary;
    }
  }

  &__slot {
    flex-grow: 1;
    font-size: 14px;
    color: $color-dark;
  }
}
</style>
