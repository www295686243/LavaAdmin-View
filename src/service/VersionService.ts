import cache from '@/plugins/cache'
import axios from '@/plugins/axios'

interface Version {
  app: number;
  config: number;
}

class VersionService {
  [key: string]: any
  private version: Version = {
    app: 0,
    config: 0
  }

  init () {
    Object.assign(this.version, cache.version.getAll() || {})
  }

  checkAllVersion (version: Version) {
    return Object.keys(version).reduce((acc, key) => {
      return acc.then(() => {
        if (this.version[key as keyof Version] !== version[key as keyof Version]) {
          this.version[key as keyof Version] = version[key as keyof Version]
          return this[`${key}Version`]()
        }
      })
    }, Promise.resolve())
      .then(() => {
        cache.version.setAll(version)
      })
  }

  configVersion () {
    return axios.get('auth/getAppConfig')
      .then((res) => {
        cache.config.set('app', res.data)
      })
  }

  appVersion () {
    return Promise.resolve()
  }

  clearAll () {
    Object.keys(this.version).forEach((key) => {
      this.version[key as keyof Version] = 0
    })
  }
}

export default new VersionService()
