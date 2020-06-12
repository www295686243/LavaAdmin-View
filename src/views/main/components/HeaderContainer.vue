<template>
  <div class="HeaderContainer">
    <div class="logo">
    </div>
    <el-menu
      mode="horizontal"
      @select="handleChangeMenu"
      :default-active="routeActive">
      <el-menu-item
        :index="v.route"
        v-for="v in list"
        :key="v.id">
          {{v.display_name}}
      </el-menu-item>
    </el-menu>
    <el-dropdown @command="handleClickDropdown">
      <div class="dropdown">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="name">{{UserService.info.nickname}}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="setup">设置</el-dropdown-item>
        <el-dropdown-item command="updateCache">更新缓存</el-dropdown-item>
        <el-dropdown-item command="logout">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import RouterService from '@/service/RouterService'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import UserService from '@/service/UserService'
import cache from '@/plugins/cache'
import { IMenu } from '@/interface/common'

@Component
export default class HeaderContainer extends Vue {
  private UserService = UserService
  private list: IMenu[] = []
  private routeActive = ''

  @Prop()
  routePaths!: IMenu[]

  @Watch('routePaths')
  onRoutePaths () {
    this.initRouteActive()
  }

  private handleChangeMenu (path: string) {
    RouterService.push(path)
  }

  private handleClickDropdown (name: string) {
    if (name === 'setup') {
      this.handleSetup()
    } else if (name === 'updateCache') {
      this.handleUpdateCache()
    } else if (name === 'logout') {
      this.handleLogout()
    }
  }

  private handleLogout () {
    this.$confirm('您真的要注销吗?', '提示', {
      type: 'warning'
    })
      .then(() => UserService.logout())
      .then((message: string) => {
        this.$message({
          type: 'success',
          message
        })
        RouterService.push('/login')
      })
  }

  private handleUpdateCache () {
    alert('还没做')
  }

  private handleSetup () {
    alert('还没做')
  }

  private initRouteActive () {
    if (this.routePaths.length > 0) {
      this.routeActive = this.routePaths[0].route
    }
  }

  created () {
    const RouteList: IMenu[] = cache.layout.get('menus') || []
    this.list = RouteList.filter((res: IMenu) => !res.parent_id)
    this.initRouteActive()
  }
}
</script>

<style lang="scss">
.HeaderContainer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
    .name {
      margin-left: 8px;
    }
  }
}
</style>
