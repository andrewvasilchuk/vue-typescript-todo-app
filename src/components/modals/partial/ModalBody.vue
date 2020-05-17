<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalBody',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, data, children }) {
    const { tag } = props

    return h(tag, { staticClass: 'modal__body' }, children)
  },
})
</script>

<style lang="scss">
.modal {
  &__body {
    padding: $default-spacing;
  }
}
</style>
