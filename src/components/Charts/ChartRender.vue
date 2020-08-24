<template>
  <DataRender class="ChartRender" :onLoad="handleLoad" ref="dataElement">
    <component :is="componentName" :title="title" :category="category" v-model="values"></component>
    <ChartTool @change="handleChange" :search="search"></ChartTool>
  </DataRender>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import ChartTool from './ChartTool.vue'
import ChartLine from './ChartLine.vue'
import DataRender from '../DataRender.vue'
import ChartService from '@/service/ChartService'
import { getDate } from '@/plugins/tools'

@Component({
  components: {
    ChartTool,
    ChartLine,
    DataRender
  }
})
export default class ChartRender extends Vue {
  @Ref()
  dataElement!: any

  @Prop()
  type!: string

  @Prop()
  title!: string

  @Prop()
  code!: string

  private category: string[] = []
  private componentName = ''
  private values = []
  private search = {
    date: getDate(undefined, 'Y-m'),
    type: 'month'
  }

  private handleLoad () {
    return Promise.resolve()
      .then(() => {
        if (this.search.type === 'month') {
          return ChartService.getCurrentMonthData(this.search.date, this.code)
        } else {
          return ChartService.getCurrentYearData(this.search.date, this.code)
        }
      })
      .then((res) => {
        this.category = res.data.category
        this.values = res.data.values
      })
  }

  private handleChange (params: { date: string; type: string }) {
    Object.assign(this.search, params)
    this.dataElement.reload()
  }

  created () {
    if (this.type === 'line') {
      this.componentName = 'ChartLine'
    }
  }
}
</script>

<style lang="scss">
.ChartRender {
  position: relative;
  height: 400px;
  .ChartTool {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>
