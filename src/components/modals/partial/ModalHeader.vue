<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/base/SvgIcon.vue'

export default Vue.extend({
  name: 'ModalHeader',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    title: {
      type: String,
      required: true,
    },
  },
  render(h, { props, data, listeners }) {
    const { tag, title } = props

    return h(tag, { staticClass: 'modal__header' }, [
      h('h2', { staticClass: 'modal__header-title' }, title),
      h(
        'button',
        {
          attrs: { type: 'button', 'aria-label': 'Close modal' },
          staticClass: 'modal__header-close',
          on: { click: listeners.close },
        },
        [h(SvgIcon, { props: { name: 'close' } })]
      ),
    ])
  },
})
</script>

<style lang="scss">
.modal {
  &__header {
    display: flex;
    align-items: center;
    padding: $default-spacing / 2 $default-spacing / 2 $default-spacing / 2
      $default-spacing;
    border-bottom: 1px solid $default-border-color;

    &-title {
      margin: {
        top: 0;
        bottom: 0;
      }
      font: {
        size: 18px;
        weight: 400;
      }
      color: $color-dark;
    }

    &-close {
      @include box(32px);
      @include reset-button();
      border-radius: $default-border-radius;
      margin-left: auto;
      color: $color-grey;
      cursor: pointer;

      svg {
        @include box(20px);
      }

      &:hover {
        color: $color-dark;
      }

      &:focus {
        @include focus-shadow();
      }
    }
  }
}
</style>
