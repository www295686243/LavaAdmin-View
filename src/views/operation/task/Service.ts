import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  name = '任务'
  modelName = 'Task/Task'
  index (params: { page: number }) {
    return axios.get('task', params)
  }

  store (params: object) {
    return axios.post('task', params)
  }

  show (id: string) {
    return axios.get(`task/${id}`)
  }

  update (params: { id: string }) {
    return axios.put(`task/${params.id}`, params)
  }

  indexAll () {
    return axios.get('task/all')
  }
}

export default new Service()
