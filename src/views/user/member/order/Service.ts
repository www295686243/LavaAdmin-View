import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'UserOrder'
  index (params: { page: number }) {
    return axios.get('user_order', params)
  }

  show (id: number | string) {
    return axios.get(`user_order/${id}`)
  }
}

export default new Service()
