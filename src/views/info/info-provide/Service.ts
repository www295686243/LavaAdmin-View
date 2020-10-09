import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import RouterService from '@/service/RouterService'

class Service extends BaseModalService {
  modelName = 'Info/InfoComplaint'
  index (params: { page: number }) {
    return axios.get('info_provide', {
      ...params,
      _model: RouterService.query('_model')
    })
  }

  store (params: object) {
    return axios.post('info_provide', params)
  }

  show (id: number | string) {
    return axios.get(`info_provide/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`info_provide/${params.id}`, params)
  }
}

export default new Service()
