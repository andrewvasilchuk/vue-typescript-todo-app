<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'SvgIcon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },

    title: {
      type: String,
    },
  },
  render(h, { props, data }) {
    const { name, title } = props

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let icon = require(`@/assets/icons/${name}.svg`)

    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default
    }

    return h(
      'svg',
      mergeData(data, {
        class: 'svg-icon svg-icon--' + name,
        attrs: { xmlns: 'http://www.w3.org/2000/svg' },
      }),
      [
        title !== undefined ? h('title', undefined, title) : null,
        h('use', {
          attrs: {
            'xlink:href': icon.url,
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          },
        }),
      ]
    )
  },
})
</script>

<style>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}
</style>
