import axios from '@/plugins/axios'

class Service {
  name = '通知模板'
  index (params: { page: number }) {
    return axios.get('notify_template', params)
  }

  store (params: object) {
    return axios.post('notify_template', params)
  }

  show (id: number | string) {
    return axios.get(`notify_template/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`notify_template/${params.id}`, params)
  }

  destroy (id: number | string) {
    return axios.delete(`notify_template/${id}`)
  }
}

export default new Service()
