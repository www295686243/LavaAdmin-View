import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '优惠券模板'
  name = 'CouponTemplate'
  index (params: { page: number }) {
    return axios.get('coupon_template', params)
  }

  store (params: object) {
    return axios.post('coupon_template', params)
  }

  show (id: number | string) {
    return axios.get(`coupon_template/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`coupon_template/${params.id}`, params)
  }
}

export default new Service()
