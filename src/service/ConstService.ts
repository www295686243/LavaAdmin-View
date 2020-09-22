import cache from '@/plugins/cache'
import areaOptions from '@/assets/json/area'

export interface OptionItem {
  id: number;
  config_id: number;
  display_name: string;
}

export interface ConfigItem {
  id: number;
  name: string;
  display_name: string;
  guard_name: string;
  options: OptionItem[];
}

class ConstService {
  getAppValue (name: string) {
    const configs = cache.config.get('app') || []
    const item = configs.find((res: { name: string }) => res.name === name)
    return item ? item.value : ''
  }

  getOptions (name: string) {
    const configs: ConfigItem[] = cache.config.get('options') || []
    const config = configs.find((res) => res.name === name)
    return config ? config.options : []
  }

  getGlobalOptions (name: string) {
    const configs: ConfigItem[] = cache.config.get('options') || []
    const config = configs.find((res) => res.name === '_global:' + name)
    return config ? config.options : []
  }

  // eslint-disable-next-line
  getOptionsValue (id: number, _displayName?: string) {
    const configs: OptionItem[] = cache.config.get('options_list') || []
    const item = configs.find((res) => res.id === id)
    return item ? item.id : null
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

  getBoolOptions () {
    return [
      {
        id: 0,
        display_name: '否'
      },
      {
        id: 1,
        display_name: '是'
      }
    ]
  }
}

export default new ConstService()
