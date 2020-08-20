<template>
  <PageContainer class="view-user-report" :onLoad="handleLoad">
    <el-row :gutter="40">
      <el-col :span="12"><EChartRender type="line"></EChartRender></el-col>
      <el-col :span="12"><EChartRender type="line"></EChartRender></el-col>
    </el-row>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EChartRender from '@/components/ECharts/EChartRender.vue'

@Component({
  components: {
    EChartRender
  }
})
export default class ViewUserReport extends Vue {
  private handleLoad () {
    return Promise.resolve()
  }
}
</script>
