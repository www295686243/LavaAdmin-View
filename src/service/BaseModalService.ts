import ConstService from './ConstService'

export default abstract class BaseModalService {
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
    return this.getControllerName() + 'Controller@' + name
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
}
