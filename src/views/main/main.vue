<template>
  <el-container class="MainContainer">
    <el-header>
    </el-header>
    <el-container class="view-container">
      <el-aside width="200px">
      </el-aside>
      <el-container class="is-vertical view-main-container">
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

@Component({
  components: {
  }
})
export default class Main extends Vue {
  private fullPath = ''

  beforeRouteEnter (to: any, from: object, next: Function) {
    console.log(cache.user.get('token'))
    if (!cache.user.get('token')) {
      next({
        path: '/login'
      })
    } else {
      next((vm: any) => {
        vm.fullPath = to.fullPath
      })
    }
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
