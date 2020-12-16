import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseAbstract from '@/abstract/BaseAbstract'

class Service extends BaseAbstract {
  displayName = '配置'
  name = 'Config'
  controllerName = 'OptionsConfig'
  index (params: object) {
    return axios.get('options_config', {
      ...params,
      guard_name: RouterService.query('guard_name')
    })
  }

  store (params: object) {
    return axios.post('options_config', params)
  }

  show (id: number | string) {
    return axios.get(`options_config/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`options_config/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`options_config/${id}`)
  }
}

export default new Service()
