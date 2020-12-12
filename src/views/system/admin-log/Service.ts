import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'AdminLog'
  index (params: { page: number }) {
    return axios.get('admin_log', params)
  }
}

export default new Service()
