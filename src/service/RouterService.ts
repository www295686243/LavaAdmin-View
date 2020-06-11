import VueRouter from 'vue-router'
import cache from '@/plugins/cache'
import { IMenu } from '@/interface/common'
import { getAncestorsAndSelf } from '@/plugins/tools'

class RouterSerivce {
  router!: VueRouter

  init (router: VueRouter) {
    this.router = router
  }

  push (path: string, query: object = {}) {
    if (path === this.router.app.$route.path) {
      return
    }
    if (!path) {
      console.warn('RouterService.push：path参数不存在')
      return false
    }
    this.router.push({
      path,
      query: {
        ...this.getNeedParams(path),
        ...query
      }
    })
  }

  pushForm (path: string, query: object = {}) {
    this.push(this.router.app.$route.path + path, {
      ...this.getUrlParams(),
      ...query
    })
  }

  replace (path: string, query?: object) {
    this.router.replace({
      path,
      query: {
        ...this.getUrlParams(),
        ...query
      }
    })
  }

  go (step = -1) {
    this.router.go(step)
  }

  query (name: string): string | number {
    const param = this.router.app.$route.query[name]
    if (name === 'id' || name.includes('_id')) {
      return param ? Number(param) : 0
    } else {
      return param as string || ''
    }
  }

  getNeedParams (path: string) {
    const list: IMenu[] = cache.layout.get('menus') || []
    const item = list.find((res) => res.route === path)
    let params = {}
    if (item) {
      const paths: IMenu[] = getAncestorsAndSelf(item.id, list)
      params = paths
        .reduce((acc: string[], row) => {
          acc = acc.concat(row.params as string[] || [])
          return acc
        }, [])
        .reduce((acc: { [key: string]: string | number }, key) => {
          acc[key] = this.query(key)
          return acc
        }, {})
    }
    return params
  }

  getUrlParams () {
    let params = {}
    const urlParams = location.search.replace('?', '')
    if (urlParams) {
      params = urlParams
        .split('&')
        .filter((res) => res)
        .reduce((acc: { [key: string]: string }, arg) => {
          const args = arg.split('=')
          acc[args[0]] = args[1]
          return acc
        }, {})
    }
    return params
  }
}

export default new RouterSerivce()
