import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'

class Service extends BaseAbstract {
  name = 'InfoComplaint'
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
