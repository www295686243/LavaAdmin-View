import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'User/UserCoupon'
  index (params: { page: number }) {
    return axios.get('user_coupon', params)
  }
}

export default new Service()
