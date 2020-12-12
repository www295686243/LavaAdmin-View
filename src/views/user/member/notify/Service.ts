import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'Notify'
  index (params: { page: number }) {
    return axios.get('notify', params)
  }

  show (id: number | string) {
    return axios.get(`notify/${id}`)
  }
}

export default new Service()
