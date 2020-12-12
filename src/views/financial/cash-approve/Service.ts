import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import SqlService from '@/service/SqlService'

class Service extends BaseAbstract {
  displayName = '提现'
  name = 'UserCash'
  index (params: { page: number }) {
    return axios.get('user_cash', {
      ...params,
      _search: (new SqlService()).where({
        field: 'status',
        operator: '<>',
        value: this.getStatusValue(1, '申请中')
      }).get()
    })
  }

  update (form: { id: string; status: number }) {
    return axios.put(`user_cash/${form.id}`, form)
  }

  show (id: string) {
    return axios.get(`user_cash/${id}`)
  }
}

export default new Service()
