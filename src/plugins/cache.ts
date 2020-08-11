import store from 'store2'

const uniqueId = process.env.NODE_ENV === 'development' ? 'dev.lavacms/' : 'lavacms/'

/**
 * 调用方式参考store2插件(例如:)config.get('menuEnum')
 * config: {menuEnum}
 */
export default {
  user: store.namespace(uniqueId + 'user'), // 会员缓存
  layout: store.namespace(uniqueId + 'layout'),
  config: store.namespace(uniqueId + 'config'),
  version: store.namespace(uniqueId + 'version'),
  clearAll () {
    store.clearAll()
  }
}
