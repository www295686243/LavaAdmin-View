import axios from '@/plugins/axios'

class Service {
  name = '员工'
  index (params: { page: number; guard_name: string }) {
    return axios.get('employee', params)
  }

  store (params: object) {
    return axios.post('employee', params)
  }

  show (id: number) {
    return axios.get(`employee/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`employee/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`employee/${id}`)
  }
}

export default new Service()
