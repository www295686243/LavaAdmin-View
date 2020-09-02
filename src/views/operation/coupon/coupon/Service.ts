import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'UserCoupon'
  index (params: { page: number }) {
    return axios.get('user_coupon', params)
  }
}

export default new Service()
