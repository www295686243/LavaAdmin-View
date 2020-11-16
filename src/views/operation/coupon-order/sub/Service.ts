import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Coupon/CouponOrderSub'
  index (params: { page: number; coupon_order_id: string }) {
    return axios.get('coupon_order_sub', params)
  }
}

export default new Service()
