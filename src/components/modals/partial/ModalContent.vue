<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalContent',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, data, children }) {
    const { tag } = props

    return h(tag, { staticClass: 'modal' }, children)
  },
})
</script>
