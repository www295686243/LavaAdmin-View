import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'UserOrder'
  index (params: { page: number }) {
    return axios.get('user_order', params)
  }

  show (id: number | string) {
    return axios.get(`user_order/${id}`)
  }
}

export default new Service()
