import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = 'Industry'
  displayName = '行业'
  index () {
    return axios.get('industry')
  }

  store (params: object) {
    return axios.post('industry', params)
  }

  show (id: number | string) {
    return axios.get(`industry/${id}`)
  }

  update (params: { id: string }) {
    return axios.put(`industry/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`industry/${id}`)
  }

  getParentTree () {
    return axios.get('industry/getParentTree')
  }
}

export default new Service()
