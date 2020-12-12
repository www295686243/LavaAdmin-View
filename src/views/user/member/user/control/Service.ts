import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'
import BaseAbstract from '@/abstract/BaseAbstract'

class Service extends BaseAbstract {
  name = 'UserControl'
  show (id: number | string) {
    return axios.get(`user_control/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user_control/${RouterService.query('id')}`, params)
  }
}

export default new Service()
