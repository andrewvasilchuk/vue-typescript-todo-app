<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalFooter',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, data, children }) {
    const { tag } = props

    return h(tag, { staticClass: 'modal__footer' }, children)
  },
})
</script>

<style lang="scss">
.modal {
  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: $default-spacing / 2 $default-spacing;
    border-top: 1px solid $default-border-color;
  }
}
</style>
