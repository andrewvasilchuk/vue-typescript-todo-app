<template>
  <div>
    <ModalComponent
      v-for="(entity, index) in modals"
      :key="index"
      @close="closeHandler(index)"
    >
      <component
        :is="entity.component"
        v-bind="entity.options.props"
        v-on="entity.options.listeners"
        @close="closeHandler(index)"
      ></component>
    </ModalComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalComponent from './ModalComponent.vue'

type ModalEntity = {
  component: Vue
  options: {
    props: Record<string, any>
    listenters: Record<string, Function | Function[]>
  }
}

export default Vue.extend({
  name: 'ModalOutlet',
  components: {
    ModalComponent,
  },
  data() {
    return {
      modals: [] as ModalEntity[],
    }
  },
  created() {
    this.$modal.bus.$on('show', this.showHandler)
  },
  beforeDestroy() {
    this.$modal.bus.$on('show', this.showHandler)
  },
  methods: {
    showHandler(entity: ModalEntity) {
      this.modals.push(entity)
    },
    closeHandler(index: number) {
      this.modals.splice(index, 1)
    },
  },
})
</script>

<style></style>
