import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'UserCoupon'
  index (params: { page: number }) {
    return axios.get('user_coupon', params)
  }
}

export default new Service()
