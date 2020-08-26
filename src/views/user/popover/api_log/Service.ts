import axios from '@/plugins/axios'

class Service {
  index (params: { page: number; user_id: string }) {
    return axios.get('api_log', params)
  }
}

export default new Service()
