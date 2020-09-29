import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import RouterService from '@/service/RouterService'

class Service extends BaseModalService {
  modelName = 'Info/InfoCheck'
  index (params: { page: number }) {
    return axios.get('info_check', {
      ...params,
      _model: RouterService.query('_model')
    })
  }

  show (id: number | string) {
    return axios.get(`info_check/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`info_check/${params.id}`, params)
  }
}

export default new Service()
