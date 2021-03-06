import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
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
