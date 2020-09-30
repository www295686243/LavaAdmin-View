import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import RouterService from '@/service/RouterService'

class Service extends BaseModalService {
  name = '任务规则'
  modelName = 'Task/TaskRule'
  index (params: { page: number }) {
    return axios.get('task_rule', {
      ...params,
      task_id: RouterService.query('task_id')
    })
  }

  store (params: object) {
    return axios.post('task_rule', params)
  }

  show (id: string) {
    return axios.get(`task_rule/${id}`)
  }

  update (params: { id: number }) {
    return axios.put(`task_rule/${params.id}`, params)
  }
}

export default new Service()
