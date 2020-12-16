import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import { ListItem } from '@/service/SqlService'

export default class Service extends BaseAbstract {
  name = 'InfoProvide'
  path = ''
  controllerName = ''

  constructor () {
    super()
    this.controllerName = this.getHrInterfaceService(this.name)
    this.path = this.getHrInterfacePath('info_provide')
  }

  index (params: { page: number; _search: (ListItem | ListItem[])[] }) {
    return axios.get(this.path, {
      ...params,
      _model: RouterService.query('_model')
    })
  }

  store (params: object) {
    return axios.post(this.path, params)
  }

  show (id: number | string) {
    return axios.get(`${this.path}/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`${this.path}/${params.id}`, params)
  }
}
