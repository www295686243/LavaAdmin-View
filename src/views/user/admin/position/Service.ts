import axios from '@/plugins/axios'

class Service {
  name = '职位'
  index () {
    return axios.get('position')
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

  updatePermissions (id: number, params: { permissions: string[]; menus: number[] }) {
    return axios.post(`position/updatePermissions/${id}`, params)
  }

  getPermissions (id: number) {
    return axios.get(`position/getPermissions/${id}`)
  }
}

export default new Service()
