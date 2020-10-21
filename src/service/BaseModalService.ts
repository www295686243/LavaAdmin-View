import ConstService from './ConstService'

export default abstract class BaseModalService {
  abstract modelName: string
  name!: string
  controllerName!: string

  public getModelName () {
    return this.modelName
  }

  public getControllerName () {
    return this.controllerName || this.modelName
  }

  public getPermissionName (name: string) {
    return this.getControllerName() + 'Controller@' + name
  }

  public getOptions (fieldName: string) {
    return ConstService.getOptions(this.modelName, fieldName)
  }

  // eslint-disable-next-line
  public getOptionsValue (fieldName: string, value: number, _display_name?: string) {
    const options = ConstService.getOptions(this.modelName, fieldName)
    const item = options.find((res) => res.value === value)
    return item ? item.value : 0
  }

  // eslint-disable-next-line
  public getStatusValue (value: number, _display_name?: string) {
    return this.getOptionsValue('status', value, _display_name)
  }
}
