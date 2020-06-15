import axios from '@/plugins/axios'

class Service {
  name = '新闻'
  index (params: { page: number; guard_name: string }) {
    return axios.get('news', params)
  }

  store (params: object) {
    return axios.post('news', params)
  }

  show (id: number) {
    return axios.get(`news/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`news/${params.id}`, params)
  }

  destroy (id: number) {
    return axios.delete(`news/${id}`)
  }
}

export default new Service()
