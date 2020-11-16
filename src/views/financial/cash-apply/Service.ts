import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import SqlService from '@/service/SqlService'

class Service extends BaseModalService {
  displayName = '提现'
  name = 'User/UserCash'
  index (params: { page: number }) {
    return axios.get('user_cash', {
      ...params,
      _search: (new SqlService()).where({
        field: 'status',
        operator: '=',
        value: this.getStatusValue(1, '申请中')
      }).get()
    })
  }

  update (form: { id: string; status: number }) {
    return axios.put(`user_cash/${form.id}`, form)
  }
}

export default new Service()
