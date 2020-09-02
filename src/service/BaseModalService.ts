export default abstract class BaseModalService {
  abstract modelName: string

  public getModelName () {
    return this.modelName
  }

  public getPermissionName (name: string) {
    return this.getModelName() + 'Controller@' + name
  }
}
