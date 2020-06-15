import Vue from 'vue'
import ImageManage from './ImageManage.vue'
import { IUploadParams } from '@/interface/common'

export default class ImageManageService {
  params: IUploadParams = { type: '' }
  instance!: any

  constructor (params: IUploadParams) {
    Object.assign(this.params, params)
  }

  open (type: string) {
    const el = document.body.appendChild(document.createElement('div'))
    const Constructor = Vue.extend(ImageManage)
    this.instance = new Constructor({
      propsData: {
        type,
        uploadParams: this.params
      }
    }).$mount(el)
    return this.instance.open()
  }

  close () {
    this.instance.close()
  }
}
