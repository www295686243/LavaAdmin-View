import Vue from 'vue'
import ServiceDialog from './Dialog.vue'

export interface DialogParams {
  hideCloseBtn?: boolean;
  width?: string;
  [key: string]: any;
}

class DialogService {
  show (component: any, params?: DialogParams) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ServiceDialog)
    const instance = new Constructor({
      propsData: {
        component,
        params,
        Service: this
      }
    }).$mount(el)
    return (instance as any).open()
  }
}

export default new DialogService()
