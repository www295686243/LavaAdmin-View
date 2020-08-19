import Vue from 'vue'
import ServiceDialog from './Dialog.vue'

class DialogService {
  show (component: any, params: any) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ServiceDialog)
    const instance = new Constructor({
      propsData: {
        component,
        ...params,
        width: 500
      }
    }).$mount(el);
    (instance as any).open()
  }
}

export default new DialogService()
