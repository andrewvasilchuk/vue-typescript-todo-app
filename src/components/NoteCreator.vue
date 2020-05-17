<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NoteCreator',
  render(h) {
    return h('form', { staticClass: 'form' }, [h('input')])
  },
})
</script>
