import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  displayName = '通知用户'
  name = 'Notify/NotifyUser'
  index (params: { page: number }) {
    return axios.get('notify_user', params)
  }

  store (params: object) {
    return axios.post('notify_user', params)
  }

  destroy (id: number | string) {
    return axios.delete(`notify_user/${id}`)
  }
}

export default new Service()
