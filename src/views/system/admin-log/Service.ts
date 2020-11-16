import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'AdminLog'
  index (params: { page: number }) {
    return axios.get('admin_log', params)
  }
}

export default new Service()
