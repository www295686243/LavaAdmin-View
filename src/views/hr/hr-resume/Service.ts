import HrAbstract from '@/abstract/HrAbstract'
import axios from '@/plugins/axios'
import { ListItem } from '@/service/SqlService'

class Service extends HrAbstract {
  name = 'HrResume'
  displayName = '求职'
  index (params: { page: number; _search?: (ListItem | ListItem[])[] }) {
    return axios.get('hr_resume', params)
  }

  store (params: object) {
    return axios.post('hr_resume', params)
  }

  show (id: number | string) {
    return axios.get(`hr_resume/${id}`)
  }

  update (params: { id: string }) {
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

  getInfoViews (params: { id: string; page: number }) {
    return axios.get('hr_resume/getInfoViews', params)
  }
}

export default new Service()
