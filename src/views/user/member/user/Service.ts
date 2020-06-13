import axios from '@/plugins/axios'

class Service {
  name = '会员'
  index (params: { page: number; guard_name: string }) {
    return axios.get('user', params)
  }

  store (params: object) {
    return axios.post('user', params)
  }

  show (id: number) {
    return axios.get(`user/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`user/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`user/${id}`)
  }
}

export default new Service()
