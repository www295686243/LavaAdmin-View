<template>
  <div class="ChartRender">
    <component :is="componentName" :title="title" :category="category" v-if="isShowChart"></component>
    <ChartTool @change="handleChange"></ChartTool>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ChartTool from './ChartTool.vue'
import ChartLine from './ChartLine.vue'

@Component({
  components: {
    ChartTool,
    ChartLine
  }
})
export default class ChartRender extends Vue {
  @Prop()
  type!: string

  @Prop()
  title!: string

  private category: string[] = []
  private componentName = ''
  private isShowChart = false

  private handleChange (category: string[]) {
    this.category = category
    this.isShowChart = true
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
  .ChartTool {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>
