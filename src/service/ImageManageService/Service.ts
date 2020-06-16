import Vue from 'vue'
import ImageManage from './ImageManage.vue'

export default class ImageManageService {
  instance!: any

  open (type: string) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ImageManage)
    this.instance = new Constructor({
      propsData: {
        type
      }
    }).$mount(el)
    return this.instance.open()
  }

  close () {
    this.instance.close()
  }
}
