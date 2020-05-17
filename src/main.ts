import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BaseComponentsPlugin } from '@/plugins/base'
import { ModalPlugin } from '@/plugins/modal'
import '@/plugins/modal/styles/core.scss'
import { ConfirmPlugin } from '@/plugins/confirm'
import './styles/main.scss'

Vue.config.productionTip = false

Vue.use(BaseComponentsPlugin)
Vue.use(ModalPlugin)

Vue.use(ConfirmPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
