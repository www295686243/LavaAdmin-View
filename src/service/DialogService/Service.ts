import Vue from 'vue'
import DialogService from './DialogService.vue'

interface IStacks {
  name: string
  instance: any
}

class DialogServiceService {
  stacks: IStacks[] = []

  open (component: any, params: any) {
    let stack = this.find(component.options.name)
    if (!stack) {
      const el = document.body.appendChild(document.createElement('div'))
      const Constructor = Vue.extend(DialogService)
      const instance = new Constructor({
        propsData: {
          component,
          ...params
        }
      }).$mount(el)
      stack = {
        name: component.options.name,
        instance: instance
      }
      this.stacks.push(stack)
    } else {
      Object.assign(stack.instance, params)
    }
    return stack.instance.open()
  }

  find (name: string) {
    return this.stacks.find((res) => res.name === name)
  }
}

export default new DialogServiceService()
