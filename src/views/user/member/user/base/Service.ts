import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '会员'
  name = 'User'
  store (params: object) {
    return axios.post('user', params)
  }

  show (id: number | string) {
    return axios.get(`user/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user/${params.id}`, params)
  }
}

export default new Service()
