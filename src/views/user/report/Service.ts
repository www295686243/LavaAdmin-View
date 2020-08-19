import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('notify', params)
  }
}

export default new Service()
