import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'

class Service extends BaseAbstract {
  name = 'TaskRecord'
  index (params: { page: number }) {
    return axios.get('task_record', params)
      .then((res) => {
        res.data.data = res.data.data.map((item: any) => {
          if (item.task_recordable) {
            item.task_recordable.title = item.task_recordable.title || item.task_recordable.nickname
          }
          return item
        })
        return res
      })
  }
}

export default new Service()
