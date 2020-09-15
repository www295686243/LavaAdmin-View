import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '会员'
  modelName = 'User/User'
  index (params: { page: number; guard_name: string }) {
    return axios.get('user', params)
  }
}

export default new Service()
