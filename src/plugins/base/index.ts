import { PluginObject } from 'vue'
import SvgIcon from '@/components/base/SvgIcon.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'

export const BaseComponentsPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.component('SvgIcon', SvgIcon)
    Vue.component('BaseContainer', BaseContainer)
    Vue.component('BaseButton', BaseButton)
    Vue.component('BaseInput', BaseInput)
    Vue.component('BaseCheckbox', BaseCheckbox)
    Vue.component('BaseAlert', BaseAlert)
  },
}
