import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import { ListItem } from '@/service/SqlService'

class Service extends BaseModalService {
  modelName = 'Info/Hr/HrJob'
  name = '招聘'
  index (params: { page: number; _search?: (ListItem | ListItem[])[] }) {
    return axios.get('hr_job', params)
  }

  store (params: object) {
    return axios.post('hr_job', params)
  }

  show (id: number | string) {
    return axios.get(`hr_job/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`hr_job/${params.id}`, params)
  }

  destroy (id: string) {
    return axios.delete(`hr_job/${id}`)
  }
}

export default new Service()
