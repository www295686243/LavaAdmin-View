import axios from '@/plugins/axios'

class Service {
  name = '配置'
  index (params: { page: number; guard_name: string }) {
    return axios.get('config', params)
  }

  store (params: object) {
    return axios.post('config', params)
  }

  show (id: number) {
    return axios.get(`config/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`config/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`config/${id}`)
  }
}

export default new Service()
