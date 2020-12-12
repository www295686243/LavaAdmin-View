import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'ApiLog'
  index (params: { page: number; user_id: string }) {
    return axios.get('api_log', params)
  }

  show (id: number | string) {
    return axios.get(`api_log/${id}`)
  }
}

export default new Service()
