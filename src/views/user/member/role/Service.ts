import axios from '@/plugins/axios'

class Service {
  name = '角色'
  index () {
    return axios.get('role')
  }

  store (params: object) {
    return axios.post('role', params)
  }

  show (id: number | string) {
    return axios.get(`role/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`role/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`role/${id}`)
  }

  updatePermissions (id: number | string, params: { permissions: string[] }) {
    return axios.post(`role/updatePermissions/${id}`, params)
  }

  getPermissions (id: number | string) {
    return axios.get(`role/getPermissions/${id}`)
  }
}

export default new Service()
