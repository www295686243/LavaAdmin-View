import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '个人认证'
  modelName = 'User/UserEnterpriseAuth'
  index () {
    return axios.get('user_enterprise_auth')
  }

  show (id: number | string) {
    return axios.get(`user_enterprise_auth/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user_enterprise_auth/${params.id}`, params)
  }
}

export default new Service()
