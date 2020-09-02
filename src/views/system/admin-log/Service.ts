import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'AdminLog'
  index (params: { page: number }) {
    return axios.get('admin_log', params)
  }
}

export default new Service()
