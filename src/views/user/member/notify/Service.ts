import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('notify', params)
  }

  show (id: number | string) {
    return axios.get(`notify/${id}`)
  }

  getTypaNameOptions () {
    return [
      {
        id: 'all',
        display_name: '全部'
      },
      {
        id: 'wechat',
        display_name: '微信'
      },
      {
        id: 'message',
        display_name: '站内信'
      }
    ]
  }
}

export default new Service()
