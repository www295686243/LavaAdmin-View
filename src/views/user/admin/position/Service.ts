import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '职位'
  modelName = 'Position'
  index () {
    return axios.get('position')
  }

  store (params: object) {
    return axios.post('position', params)
  }

  show (id: number | string) {
    return axios.get(`position/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`position/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`position/${id}`)
  }

  updatePermissions (id: number | string, params: { permissions: string[]; menus: number[] }) {
    return axios.post(`position/updatePermissions/${id}`, params)
  }

  getPermissions (id: number | string) {
    return axios.get(`position/getPermissions/${id}`)
  }
}

export default new Service()
