import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'CouponOrderSub'
  index (params: { page: number; coupon_order_id: string }) {
    return axios.get('coupon_order_sub', params)
  }
}

export default new Service()
