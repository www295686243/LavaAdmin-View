import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'CouponMarket'
  index (params: { page: number }) {
    return axios.get('coupon_market', params)
  }
}

export default new Service()
