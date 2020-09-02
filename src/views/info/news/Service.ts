import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '新闻'
  modelName = 'News'
  index (params: { page: number; guard_name: string }) {
    return axios.get('news', params)
  }

  store (params: object) {
    return axios.post('news', params)
  }

  show (id: number | string) {
    return axios.get(`news/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`news/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`news/${id}`)
  }
}

export default new Service()
