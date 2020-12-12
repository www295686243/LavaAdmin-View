import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'UserBill'
  index (params: { page: number }) {
    return axios.get('user_bill', params)
  }
}

export default new Service()
