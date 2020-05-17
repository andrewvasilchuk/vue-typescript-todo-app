<script lang="ts">
import Vue from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'AppBar',
  functional: true,
  render(h, { data }) {
    return h('header', mergeData(data, { staticClass: 'header' }), [
      h(BaseContainer, { staticClass: 'header__inner' }, [
        h('div', { staticClass: 'header__title' }, 'Todo Application'),
      ]),
    ])
  },
})
</script>

<style lang="scss">
.header {
  @include box(100%, 56px);
  position: sticky;
  top: 0;
  bottom: 0;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 32px;

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 18px;
    color: #333;
  }
}
</style>
