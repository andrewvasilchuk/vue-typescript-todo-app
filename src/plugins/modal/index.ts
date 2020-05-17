import Vue, { PluginObject } from 'vue'
import ModalOutlet from './components/ModalOutlet.vue'

class ModalManager {
  bus: Vue

  constructor() {
    this.bus = new Vue()
  }

  show(component: Vue, options = {}) {
    this.bus.$emit('show', { component, options })
  }
}

export const ModalPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.prototype.$modal = new ModalManager()

    Vue.component('ModalOutlet', ModalOutlet)
  },
}
