import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'CouponOrder'
  index (params: { page: number }) {
    return axios.get('coupon_order', params)
  }
}

export default new Service()
