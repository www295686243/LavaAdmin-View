import cache from '@/plugins/cache'
import axios from '@/plugins/axios'
import VersionService from './VersionService'

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
      .then(() => axios.post('auth/loginStat', {}))
      .then(() => this.getUserConfig())
  }

  logout () {
    return Promise.resolve()
      .then(() => {
        cache.clearAll()
        VersionService.clearAll()
        return '注销成功'
      })
  }

  update () {
    return this.getUserConfig()
  }

  private updateData (params: UserInfo) {
    Object.assign(this.info, params)
  }

  private getUserConfig () {
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
