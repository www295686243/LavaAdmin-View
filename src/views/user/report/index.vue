<template>
  <PageContainer class="view-user-report" :onLoad="handleLoad">
    <el-row>
      <el-col :span="12"><EChartLine></EChartLine></el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EChartLine from '@/components/ECharts/EChartLine.vue'

@Component({
  components: {
    EChartLine
  }
})
export default class ViewUserReport extends Vue {
  private handleLoad () {
    return Promise.resolve()
  }
}
</script>
