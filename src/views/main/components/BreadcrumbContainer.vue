<template>
  <div class="BreadcrumbContainer">
    <el-button
      size="mini"
      type="dashed"
      @click="RouterService.go()"
      icon="el-icon-arrow-left"
      class="back-btn"
      v-show="isBack">
      返回
    </el-button>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(name, index) in list" :key="index">{{name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import RouterService from '@/service/RouterService'
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { IMenu } from '@/interface/common'

@Component
export default class BreadcrumbContainer extends Vue {
  private isBack = false
  private list: string[] = []

  @Prop()
  routePaths!: IMenu[]

  @Watch('$route')
  onRoute () {
    this.isBack = false
    this.optimizeData()
    this.initList()
  }

  private RouterService = RouterService

  private optimizeData () {
    if (this.$route.path.split('/').includes('form')) {
      this.isBack = true
    } else if (this.$route.meta.title) {
      this.isBack = true
    }
  }

  private initList () {
    this.list = this.routePaths.map((res) => res.display_name)
  }

  created () {
    this.optimizeData()
    this.initList()
  }
}
</script>

<style lang="scss">
.BreadcrumbContainer {
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 20px 20px 0;
  display: flex;
  align-items: center;
  .back-btn {
    margin-right: 1em;
  }
}
</style>
