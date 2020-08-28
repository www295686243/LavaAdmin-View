import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('user_coupon', params)
  }
}

export default new Service()
