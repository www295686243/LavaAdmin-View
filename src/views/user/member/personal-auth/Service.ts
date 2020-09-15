import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '个人认证'
  modelName = 'User/UserPersonalAuth'
  index () {
    return axios.get('user_personal_auth')
  }

  show (id: number | string) {
    return axios.get(`user_personal_auth/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user_personal_auth/${params.id}`, params)
  }
}

export default new Service()
