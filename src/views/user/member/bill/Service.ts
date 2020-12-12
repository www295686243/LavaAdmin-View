import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'UserBill'
  index (params: { page: number }) {
    return axios.get('user_bill', params)
  }
}

export default new Service()
