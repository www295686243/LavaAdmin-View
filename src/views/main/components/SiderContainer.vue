<template>
  <el-menu
    :route="true"
    :default-active="$route.path"
    @select="handleSelect"
    class="SiderContainer">
    <template v-for="v in list">
      <el-submenu :key="v.id" :index="v.route" v-if="v.children.length > 0">
        <template slot="title">
          <i :class="v.icon"></i>
          <span>{{v.display_name}}</span>
        </template>
        <el-menu-item
          :index="item.route"
          v-for="item in v.children"
          :key="item.id">
            {{item.display_name}}
        </el-menu-item>
      </el-submenu>
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

const RouteList: IMenu[] = cache.layout.get('menus') || []

@Component
export default class SiderContainer extends Vue {
  private list: IMenu[] = []

  @Prop()
  routePaths!: IMenu[]

  @Watch('routePaths')
  onRoutePaths () {
    this.initList()
  }

  private handleSelect (path: string) {
    RouterService.push(path)
  }

  private initList () {
    const rootRouteItem = this.routePaths[0]
    this.list = RouteList
      .filter((res) => res.parent_id === rootRouteItem.id)
      .map((route) => {
        route.children = RouteList.filter((row) => row.parent_id === route.id)
        return route
      })
  }
}
</script>

<style lang="scss">
.SiderContainer {
  height: 100%;
}
</style>
