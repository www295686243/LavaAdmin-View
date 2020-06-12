import axios from '@/plugins/axios'

class Service {
  name = '职位'
  index (params: { page: number; guard_name: string }) {
    return axios.get('position', params)
  }

  store (params: object) {
    return axios.post('position', params)
  }

  show (id: number) {
    return axios.get(`position/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`position/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`position/${id}`)
  }
}

export default new Service()
