import ConstService from '@/service/ConstService'
import DialogService, { DialogParams } from '@/service/DialogService/Service'
import RouterService from '@/service/RouterService'

export default abstract class BaseAbstract {
  abstract name: string
  displayName!: string
  controllerName!: string

  public getModelName () {
    return this.name
  }

  public getControllerName () {
    return this.controllerName || this.name
  }

  public getPermissionName (name: string) {
    return name.includes('@') ? name : this.getControllerName() + 'Controller@' + name
  }

  public getOptions (fieldName: string) {
    return ConstService.getOptions(this.name, fieldName)
  }

  // eslint-disable-next-line
  public getOptionsValue (fieldName: string, value: number, _display_name?: string) {
    const options = ConstService.getOptions(this.name, fieldName)
    const item = options.find((res) => res.value === value)
    return item ? item.value : 0
  }

  // eslint-disable-next-line
  public getStatusValue (value: number, _display_name?: string) {
    return this.getOptionsValue('status', value, _display_name)
  }

  public dialog (component: any, params: DialogParams) {
    return DialogService.show.call(this, component, params)
  }

  // 获取Hr接口路径
  public getHrInterfacePath (path: string) {
    const prefix = this.toLowerLine(RouterService.query('_model'))
    return `${prefix}_${path}`
  }

  public getHrInterfaceService (service: string) {
    const prefix = RouterService.query('_model')
    return `${prefix}${service}`
  }

  private toLowerLine (str: string) {
    let temp = str.replace(/[A-Z]/g, function (match) {
      return '_' + match.toLowerCase()
    })
    if (temp.slice(0, 1) === '_') { // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
      temp = temp.slice(1)
    }
    return temp
  }
}
