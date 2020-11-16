import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Coupon/CouponOrder'
  index (params: { page: number }) {
    return axios.get('coupon_order', params)
  }
}

export default new Service()
