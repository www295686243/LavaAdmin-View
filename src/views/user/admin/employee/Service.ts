import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '员工'
  modelName = 'Employee'
  controllerName = 'User/User'
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
