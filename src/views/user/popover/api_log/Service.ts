import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'ApiLog'
  index (params: { page: number; user_id: string }) {
    return axios.get('api_log', params)
  }

  show (id: number | string) {
    return axios.get(`api_log/${id}`)
  }
}

export default new Service()
