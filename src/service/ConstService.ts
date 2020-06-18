import cache from '@/plugins/cache'

class ConstService {
  getAppValue (name: string) {
    const configs = cache.config.get('app')
    const item = configs.find((res: { name: string }) => res.name === name)
    return item ? item.value : ''
  }

  getAppOptions (name: string) {
    const configs = cache.config.get('app')
    const item = configs.find((res: { name: string }) => res.name === name)
    return item ? item.options : []
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
