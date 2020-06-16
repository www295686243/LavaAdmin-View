import Vue from 'vue'
import ServiceCarousel from './Carousel.vue'

// 直接使用会导致组件注册时机不对，封装成方法在点击的时候再加载组件
class CarouselService {
  instance!: any

  open (urls: string[], params: any = {}) {
    if (!this.instance) {
      const el = document.body.appendChild(document.createElement('div'))
      const Constructor = Vue.extend(ServiceCarousel)
      this.instance = new Constructor({
        propsData: {
          ...params
        }
      }).$mount(el)
    }
    this.instance.open(urls)
  }
}

export default new CarouselService()
