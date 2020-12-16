import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'

export default class Service extends BaseAbstract {
  name = 'InfoCheck'
  path = ''
  controllerName = ''

  constructor () {
    super()
    this.controllerName = this.getHrInterfaceService(this.name)
    this.path = this.getHrInterfacePath('info_check')
  }

  index (params: { page: number }) {
    return axios.get(this.path, {
      ...params,
      _model: RouterService.query('_model')
    })
  }

  show (id: number | string) {
    return axios.get(`${this.path}/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`${this.path}/${params.id}`, params)
  }
}
