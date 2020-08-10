import cache from '@/plugins/cache'
import { IOptions } from '@/interface/common'
import areaOptions from '@/assets/json/area'

interface ConfigItem {
  name: string;
  display_name: string;
  guard_name: string;
  options: IOptions[];
}

class ConstService {
  getAppValue (name: string) {
    const configs = cache.config.get('app') || []
    const item = configs.find((res: { name: string }) => res.name === name)
    return item ? item.value : ''
  }

  getOptions (guard_name: string, name: string) {
    const configs: ConfigItem[] = cache.config.get(guard_name) || []
    const config = configs.find((res) => res.name === name)
    return config ? config.options : []
  }

  getUserOptions (name: string) {
    return this.getOptions('options.User', name)
  }

  getAreaOptions () {
    return JSON.parse(JSON.stringify(areaOptions))
  }

  getColor (name: string) {
    switch (name) {
      case 'success':
        return '#67C23A'
      case 'warning':
        return '#E6A23C'
      case 'error':
        return '#F56C6C'
      default:
        if (name.includes('#')) {
          return name
        } else {
          return '#303133'
        }
    }
  }
}

export default new ConstService()
