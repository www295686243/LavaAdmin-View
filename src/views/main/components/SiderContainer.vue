<template>
  <el-menu
    :route="true"
    :default-active="routeActive"
    @select="handleSelect"
    class="SiderContainer">
    <template v-for="v in list">
      <el-menu-item-group :key="v.id" v-if="v.children.length > 0">
        <template slot="title">
          <i :class="v.icon" class="menu-item-group-icon"></i>
          <span>{{v.display_name}}</span>
        </template>
        <el-menu-item
          :index="item.route"
          v-for="item in v.children"
          class="sub-class"
          :key="item.id">
            <i :class="item.icon"></i>
            {{item.display_name}}
            <el-badge :value="AppService.menuInfoStat[item.route]" class="badge" v-if="AppService.menuInfoStat[item.route]"></el-badge>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item :key="v.id" :index="v.route" v-else>
        <i :class="v.icon"></i>
        {{v.display_name}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import cache from '@/plugins/cache'
import RouterService from '@/service/RouterService'
import { IMenu } from '@/interface/common'
import AppService from '@/service/AppService'

@Component
export default class SiderContainer extends Vue {
  private list: IMenu[] = []
  private routeActive = ''
  private AppService = AppService

  @Prop()
  routePaths!: IMenu[]

  @Watch('routePaths')
  onRoutePaths () {
    this.routeActive = this.routeFilter(this.$route.path)
    this.initList()
  }

  private handleSelect (path: string) {
    RouterService.push(path)
  }

  private initList () {
    const RouteList: IMenu[] = cache.layout.get('menus') || []
    const rootRouteItem = this.routePaths[0]
    this.list = RouteList
      .filter((res) => res.parent_id === rootRouteItem.id)
      .map((route) => {
        route.children = RouteList.filter((row) => row.parent_id === route.id)
        return route
      })
  }

  private routeFilter (path: string) {
    const paths = path.split('/').filter((str) => str && str !== 'form')
    if (this.$route.meta.title) {
      paths.pop()
    }
    path = paths.join('/')
    return '/' + path
  }

  created () {
    this.routeActive = this.routeFilter(this.$route.path)
    this.initList()
  }
}
</script>

<style lang="scss">
.SiderContainer {
  height: 100%;
  .menu-item-group-icon {
    margin-right: 5px;
  }
  .sub-class {
    display: flex;
    align-items: center;
    .badge {
      margin-left: 5px;
    }
  }
}
</style>
