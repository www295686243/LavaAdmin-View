import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'Info/Hr/HrResume'
  name = '求职'
  index (params: { page: number }) {
    return axios.get('hr_resume', params)
  }

  store (params: object) {
    return axios.post('hr_resume', params)
  }

  show (id: number | string) {
    return axios.get(`hr_resume/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`hr_resume/${params.id}`, params)
  }

  destroy (id: string) {
    return axios.delete(`hr_resume/${id}`)
  }
}

export default new Service()
