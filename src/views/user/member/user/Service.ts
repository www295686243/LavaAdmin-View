import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '会员'
  name = 'User'
  index (params: { page: number; guard_name: string }) {
    return axios.get('user', params)
  }
}

export default new Service()
