import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseAbstract from '@/abstract/BaseAbstract'

class Service extends BaseAbstract {
  displayName = '配置'
  name = 'Config'
  controllerName = 'ParamsConfig'
  index (params: object) {
    return axios.get('params_config', {
      ...params,
      guard_name: RouterService.query('guard_name')
    })
  }

  store (params: object) {
    return axios.post('params_config', params)
  }

  show (id: number | string) {
    return axios.get(`params_config/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`params_config/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`params_config/${id}`)
  }
}

export default new Service()
