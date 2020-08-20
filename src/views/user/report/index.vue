<template>
  <PageContainer class="view-user-report" :onLoad="handleLoad">
    <el-row :gutter="40">
      <el-col :span="12"><ChartRender type="line"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line"></ChartRender></el-col>
    </el-row>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChartRender from '@/components/Charts/ChartRender.vue'

@Component({
  components: {
    ChartRender
  }
})
export default class ViewUserReport extends Vue {
  private handleLoad () {
    return Promise.resolve()
  }
}
</script>
