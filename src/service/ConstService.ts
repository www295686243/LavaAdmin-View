import cache from '@/plugins/cache'
import areaOptions from '@/assets/json/area'

export interface OptionBoolItem {
  display_name: string;
  value: number;
  [key: string]: any;
}

export interface OptionItem {
  id: string;
  config_id: number;
  display_name: string;
  value: number;
  name: string;
  disabled: boolean;
  [key: string]: any;
}

export interface ConfigItem {
  id: string;
  name: string;
  display_name: string;
  guard_name: string;
  options: OptionItem[];
}

class ConstService {
  getValue (name: string) {
    const configs = cache.config.get('options') || []
    const item = configs.find((res: { name: string }) => res.name === name)
    return item ? item.value : ''
  }

  getOptions (className: string, field: string) {
    const configs: ConfigItem[] = cache.config.get('options') || []
    let config = configs.find((res) => res.name === className + ':' + field)
    if (!config) {
      config = configs.find((res) => res.name === '_global:' + field)
    }
    return config ? config.options : []
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
      case 'click':
        return '#409EFF'
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
        value: 0,
        display_name: '否'
      },
      {
        value: 1,
        display_name: '是'
      }
    ]
  }

  getModelNames () {
    return [
      { value: 'App\\Models\\Info\\Hr\\HrJob', display_name: '招聘', color: '#409EFF' },
      { value: 'App\\Models\\Info\\Hr\\HrResume', display_name: '简历', color: '#67C23A' },
      { value: 'App\\Models\\User\\UserPersonal', display_name: '个人详情' }
    ]
  }
}

export default new ConstService()
