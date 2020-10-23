import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'Task/TaskRuleRecord'
  index (params: { page: number; task_record_id: string }) {
    return axios.get('task_rule_record', params)
  }
}

export default new Service()
