import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '个人认证'
  name = 'UserEnterpriseAuth'
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
