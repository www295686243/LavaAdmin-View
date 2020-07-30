import VueRouter from 'vue-router'
import cache from '@/plugins/cache'
import { IMenu } from '@/interface/common'
import { getAncestorsAndSelf, studly } from '@/plugins/tools'

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
    if (path.substr(0, 1) !== '/') {
      path = this.getPath() + '/' + path
    }
    this.router.push({
      path,
      query: {
        ...this.getNeedParams(path),
        ...query
      }
    })
  }

  pushForm (query: { id?: number; marking?: number } = {}) {
    if (!query.id) {
      query.marking = (new Date()).valueOf()
    }
    this.push(this.router.app.$route.path + '/form', {
      ...this.router.app.$route.query,
      ...query
    })
  }

  replace (path: string, query?: object) {
    const urlQuery = this.router.app.$route.query
    const currentQuery: { [key: string]: any } = {
      ...this.router.app.$route.query,
      ...query
    }
    if (path === this.router.app.$route.path && JSON.stringify(urlQuery) === JSON.stringify(currentQuery)) {
      return
    }
    if (path.substr(0, 1) !== '/') {
      path = this.getPath() + '/' + path
    }
    this.router.replace({
      path,
      query: currentQuery
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

  getPath () {
    return this.router.app.$route.path
  }

  getControllerName () {
    return this.getModelName() + 'Controller'
  }

  getModelName () {
    const path = this.getPath()
    const model = path.split('/').filter((name: string) => name !== 'form').pop() as string
    return studly(model)
  }

  getNeedParams (path: string) {
    const list: IMenu[] = cache.layout.get('menus') || []
    const item = list.find((res) => res.route === path)
    let params = {}
    let defaultParams = {}
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

      defaultParams = paths
        .reduce((acc: { [key: string]: string | number }, row) => {
          return Object.assign({}, acc, row.default_params)
        }, {})
    }
    return Object.assign({}, params, defaultParams)
  }
}

export default new RouterSerivce()
