import Vue from 'vue'
import ImageManage from './ImageManage.vue'

export default class ImageManageService {
  instance!: any

  open (type: string, modelName: string) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ImageManage)
    this.instance = new Constructor({
      propsData: {
        type,
        modelName
      }
    }).$mount(el)
    return this.instance.open()
  }

  close () {
    this.instance.close()
  }
}
