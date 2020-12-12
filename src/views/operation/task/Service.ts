import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  displayName = '任务'
  name = 'Task'
  index (params: { page: number }) {
    return axios.get('task', params)
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
