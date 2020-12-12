import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'TaskRuleRecord'
  index (params: { page: number; task_record_id: string }) {
    return axios.get('task_rule_record', params)
  }
}

export default new Service()
