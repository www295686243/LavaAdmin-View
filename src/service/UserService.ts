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
    return axios.post('auth/login', params)
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
    return axios.get('auth/getUserConfig')
      .then((res) => {
        cache.user.setAll(res.data.user)
        this.updateData(res.data.user)
        cache.user.set('interface', res.data.interface || [])
        cache.layout.set('menus', res.data.menus)
      })
  }

  hasPermission (name: string) {
    const permissions: string[] = cache.user.get('interface') || []
    return this.hasRoot() || permissions.includes(name)
  }

  hasRoot () {
    const roles = cache.user.get('roles') || []
    return roles.some((res: { name: string }) => res.name === 'root')
  }
}

export default new UserService()
