import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'UserEnterprise'
  show (id: number | string) {
    return axios.get(`user_enterprise/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user_enterprise/${RouterService.query('id')}`, params)
  }
}

export default new Service()
