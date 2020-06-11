import cache from '@/plugins/cache'
import axios from '@/plugins/axios'

interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  id: number;
  username: string;
  nickname: string;
  phone: string;
}

class UserService {
  info: UserInfo = {
    id: 0,
    nickname: '',
    username: '',
    phone: ''
  }

  init () {
    Object.assign(this.info, cache.user.getAll())
  }

  login (params: LoginParams) {
    return axios.post('user/login', params)
      .then((res) => {
        cache.user.setAll(res.data)
        this.updateData(res.data)
      })
      .then(() => this.getUserConfig())
  }

  logout () {
    return Promise.resolve()
      .then(() => {
        cache.clearAll()
        return '注销成功'
      })
  }

  updateData (params: UserInfo) {
    Object.assign(this.info, params)
  }

  getUserConfig () {
    return axios.get('user/getUserConfig')
      .then((res) => {
        cache.user.setAll(res.data.user)
        this.updateData(res.data.user)
        cache.layout.set('menus', res.data.menus)
      })
  }
}

export default new UserService()
