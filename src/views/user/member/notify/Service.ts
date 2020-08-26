import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('notify', params)
  }

  show (id: number | string) {
    return axios.get(`notify/${id}`)
  }
}

export default new Service()
