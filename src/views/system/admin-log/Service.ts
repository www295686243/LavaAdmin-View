import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('admin_log', params)
  }
}

export default new Service()
