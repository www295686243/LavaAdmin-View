import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'

class Service extends BaseModalService {
  modelName = 'Task/TaskRecord'
  index (params: { page: number }) {
    return axios.get('task_record', params)
  }
}

export default new Service()
