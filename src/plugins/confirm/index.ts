import { PluginObject } from 'vue'
import ConfirmModal from './components/ConfirmModal.vue'

export const ConfirmPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.prototype.$confirm = (text?: string) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$modal.show(ConfirmModal, {
          props: { text },
          listeners: {
            success() {
              return resolve()
            },
            reject() {
              return reject()
            },
            close() {
              return reject()
            },
          },
        })
      })
    }
  },
}
