import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
import ConstService from '@/service/ConstService'
import SqlService from '@/service/SqlService'

class Service extends BaseModalService {
  name = '提现'
  modelName = 'User/UserCash'
  index (params: { page: number }) {
    return axios.get('user_cash', {
      ...params,
      _search: (new SqlService()).where('status', '不包含', ConstService.getOptionsValue(84, '申请中'), 'int').get()
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
