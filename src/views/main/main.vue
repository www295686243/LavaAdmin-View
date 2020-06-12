<template>
  <el-container class="MainContainer" v-if="isShowPage">
    <el-header>
      <HeaderContainer :routePaths="routePaths"></HeaderContainer>
    </el-header>
    <el-container class="view-container">
      <el-aside width="200px">
        <SiderContainer :routePaths="routePaths"></SiderContainer>
      </el-aside>
      <el-container class="is-vertical view-main-container">
        <BreadcrumbContainer :routePaths="routePaths"></BreadcrumbContainer>
        <el-main class="main">
          <router-view :key="fullPath"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import cache from '@/plugins/cache'
import HeaderContainer from './components/HeaderContainer.vue'
import SiderContainer from './components/SiderContainer.vue'
import BreadcrumbContainer from './components/BreadcrumbContainer.vue'
import { IMenu } from '@/interface/common'
import { getAncestorsAndSelf } from '@/plugins/tools'

@Component({
  components: {
    HeaderContainer,
    SiderContainer,
    BreadcrumbContainer
  }
})
export default class Main extends Vue {
  private fullPath = ''
  private routePaths: IMenu[] = []
  private isShowPage = false

  beforeRouteEnter (to: any, from: object, next: Function) {
    if (!cache.user.get('api_token')) {
      next({
        path: '/login'
      })
    } else {
      next((vm: any) => {
        vm.fullPath = to.fullPath
        vm.initRoutePaths(to.path)
        vm.isShowPage = true
      })
    }
  }

  beforeRouteUpdate (to: any, from: any, next: Function) {
    this.initRoutePaths(to.path)
    next()
  }

  private initRoutePaths (path: string) {
    const RouteList: IMenu[] = cache.layout.get('menus') || []
    path = path === '/' ? '/system' : path
    path = this.routeFilterForm(path)
    const routeItem = RouteList.find((res) => res.route === path)
    if (routeItem) {
      this.routePaths = getAncestorsAndSelf(routeItem.id, RouteList)
    }
  }

  private routeFilterForm (path: string) {
    path = path.split('/').filter((str) => str && str !== 'form').join('/')
    return '/' + path
  }
}
</script>

<style lang="scss">
.MainContainer {
  height: 100%;
  .layer-main {
    padding: 0;
  }
  .el-header {
    overflow: hidden;
    border-bottom: solid 1px #e6e6e6;
    .el-menu-item.is-active {
      border-bottom-width: 3px;
    }
  }
  .contant-container {
    height: 100%;
    .main {
      overflow-y: hidden;
    };
  }
}
</style>
