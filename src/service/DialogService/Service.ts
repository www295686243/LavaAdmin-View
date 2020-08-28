import Vue from 'vue'
import ServiceDialog from './Dialog.vue'

class DialogService {
  show (component: any, params?: any) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ServiceDialog)
    const instance = new Constructor({
      propsData: {
        component,
        ...params,
        width: '800px'
      }
    }).$mount(el)
    return (instance as any).open()
      .catch(() => {
        console.log('关闭弹窗')
      })
  }
}

export default new DialogService()
