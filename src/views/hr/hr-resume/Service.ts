import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Info/Hr/HrResume'
  displayName = '求职'
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

  transfer (params: { id: string; transfer_user_id: string }) {
    return axios.post('hr_resume/transfer', params)
  }

  push (params: { industries: number[]; cities: number[] }) {
    return axios.post('hr_resume/push', params)
  }
}

export default new Service()
