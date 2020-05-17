<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'BaseCard',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, data, children }) {
    return h(props.tag, mergeData(data, { staticClass: 'card' }), children)
  },
})
</script>

<style lang="scss">
.card {
  border-radius: $default-border-radius;
  border: 1px solid $default-border-color;
}
</style>
