import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '员工'
  name = 'User'
  controllerName = 'Employee'
  index (params: { page: number; guard_name: string }) {
    return axios.get('employee', params)
  }

  store (params: object) {
    return axios.post('employee', params)
  }

  show (id: number | string) {
    return axios.get(`employee/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`employee/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`employee/${id}`)
  }
}

export default new Service()
