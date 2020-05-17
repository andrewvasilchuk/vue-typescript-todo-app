<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'BaseContainer',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, { props, data, children }) {
    const { tag } = props
    return h(tag, mergeData(data, { staticClass: 'container' }), children)
  },
})
</script>

<style lang="scss">
.container {
  width: 100%;
  padding: {
    right: $grid-gutter-width / 2;
    left: $grid-gutter-width / 2;
  }
  margin: {
    right: auto;
    left: auto;
  }
}

@each $breakpoint, $container-max-width in $container-max-widths {
  @media (min-width: map-get($grid-breakpoints, $breakpoint)) {
    .container {
      max-width: $container-max-width;
    }
  }
}
</style>
