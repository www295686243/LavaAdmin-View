<template>
  <div class="EChartContainer">
    <slot></slot>
    <EChartTool></EChartTool>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EChartTool from './EChartTool.vue'

@Component({
  components: {
    EChartTool
  }
})
export default class EChartContainer extends Vue {
}
</script>

<style lang="scss">
.EChartContainer {
  position: relative;
  .EChartTool {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
