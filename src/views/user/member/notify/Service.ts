import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Notify/Notify'
  index (params: { page: number }) {
    return axios.get('notify', params)
  }

  show (id: number | string) {
    return axios.get(`notify/${id}`)
  }
}

export default new Service()
