import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Version'
  index (params: { page: number; guard_name: string }) {
    return axios.get('version', params)
  }

  show (id: number | string) {
    return axios.get(`version/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`version/${params.id}`, params)
  }
}

export default new Service()
