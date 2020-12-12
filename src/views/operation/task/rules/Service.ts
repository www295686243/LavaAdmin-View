import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import RouterService from '@/service/RouterService'

class Service extends BaseAbstract {
  displayName = '任务规则'
  name = 'TaskRule'
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
