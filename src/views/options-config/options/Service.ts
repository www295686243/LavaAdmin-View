import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '选项'
  modelName = 'ConfigOption'
  index (params: { page: number }) {
    return axios.get('config_option', {
      ...params,
      config_id: RouterService.query('config_id')
    })
  }

  store (params: object) {
    return axios.post('config_option', params)
  }

  show (id: number) {
    return axios.get(`config_option/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`config_option/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`config_option/${id}`)
  }
}

export default new Service()
