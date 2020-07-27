import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'

class Service {
  name = '选项'
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
