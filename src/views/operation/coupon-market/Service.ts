import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Coupon/CouponMarket'
  index (params: { page: number }) {
    return axios.get('coupon_market', params)
  }
}

export default new Service()
