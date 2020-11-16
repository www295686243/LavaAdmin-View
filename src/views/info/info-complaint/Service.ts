import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import RouterService from '@/service/RouterService'

class Service extends BaseModalService {
  name = 'Info/InfoComplaint'
  index (params: { page: number }) {
    return axios.get('info_complaint', {
      ...params,
      _model: RouterService.query('_model')
    })
  }

  show (id: number | string) {
    return axios.get(`info_complaint/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`info_complaint/${params.id}`, params)
  }
}

export default new Service()
