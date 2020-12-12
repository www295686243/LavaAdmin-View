import HrAbstract from '@/abstract/HrAbstract'
import axios from '@/plugins/axios'
import { ListItem } from '@/service/SqlService'

class Service extends HrAbstract {
  name = 'HrJob'
  displayName = '招聘'
  index (params: { page: number; _search?: (ListItem | ListItem[])[] }) {
    return axios.get('hr_job', params)
  }

  store (params: object) {
    return axios.post('hr_job', params)
  }

  show (id: number | string) {
    return axios.get(`hr_job/${id}`)
  }

  update (params: { id: string }) {
    return axios.put(`hr_job/${params.id}`, params)
  }

  destroy (id: string) {
    return axios.delete(`hr_job/${id}`)
  }

  transfer (params: { id: string; transfer_user_id: string }) {
    return axios.post('hr_job/transfer', params)
  }

  push (params: { industries: number[]; cities: number[] }) {
    return axios.post('hr_job/push', params)
  }

  getInfoViews (params: { id: string; page: number }) {
    return axios.get('hr_job/getInfoViews', params)
  }
}

export default new Service()
