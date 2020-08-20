<template>
  <div class="EChartRender">
    <component :is="componentName"></component>
    <EChartTool @change="handleChange"></EChartTool>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import EChartTool from './EChartTool.vue'
import EChartLine from './EChartLine.vue'

@Component({
  components: {
    EChartTool,
    EChartLine
  }
})
export default class EChartRender extends Vue {
  @Prop()
  type!: string

  private date = ''
  private componentName = ''

  private handleChange (value: string) {
    this.date = value
  }

  created () {
    if (this.type === 'line') {
      this.componentName = 'EChartLine'
    }
  }
}
</script>

<style lang="scss">
.EChartRender {
  position: relative;
  .EChartTool {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>
