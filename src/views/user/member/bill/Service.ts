import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'UserBill'
  index (params: { page: number }) {
    return axios.get('user_bill', params)
  }
}

export default new Service()
