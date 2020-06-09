import cache from '@/plugins/cache'
import axios from '@/plugins/axios'

interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  username: string;
  nickname: string;
}

class UserService {
  info: UserInfo = {
    nickname: '',
    username: ''
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
  }
}

export default new UserService()
