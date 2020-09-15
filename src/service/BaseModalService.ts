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
}
