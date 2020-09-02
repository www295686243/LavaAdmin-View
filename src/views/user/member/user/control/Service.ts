import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'UserControl'
  show (id: number | string) {
    return axios.get(`user_control/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user_control/${RouterService.query('id')}`, params)
  }
}

export default new Service()
