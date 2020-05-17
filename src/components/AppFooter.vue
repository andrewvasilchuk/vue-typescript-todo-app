<script lang="ts">
import Vue from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'AppFooter',
  functional: true,
  render(h, { data }) {
    return h('footer', mergeData(data, { staticClass: 'footer' }), [
      h(BaseContainer, { staticClass: 'footer__inner' }),
    ])
  },
})
</script>

<style lang="scss">
.footer {
  @include box(100%, 56px);
  border-top: 1px solid #ebeef5;
  margin-top: 32px;

  &__inner {
    height: 100%;
  }
}
</style>
