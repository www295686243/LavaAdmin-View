import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '职位'
  name = 'Role'
  controllerName = 'Position'
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
