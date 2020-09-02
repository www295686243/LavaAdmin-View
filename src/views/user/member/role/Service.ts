import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '角色'
  modelName = 'Role'
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
