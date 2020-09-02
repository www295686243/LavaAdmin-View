import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '会员'
  modelName = 'User'
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
