import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'Info/Hr'
  index (params: { page: number }) {
    return axios.get('hr', params)
  }

  store (params: object) {
    return axios.post('hr', params)
  }

  show (id: number | string) {
    return axios.get(`hr/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`hr/${params.id}`, params)
  }

  destroy (id: string) {
    return axios.delete(`hr/${id}`)
  }
}

export default new Service()
