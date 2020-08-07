import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'

class Service {
  name = '配置'
  index (params: object) {
    return axios.get('config', {
      ...params,
      guard_name: RouterService.query('guard_name')
    })
  }

  store (params: object) {
    return axios.post('config', params)
  }

  show (id: number | string) {
    return axios.get(`config/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`config/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`config/${id}`)
  }
}

export default new Service()
