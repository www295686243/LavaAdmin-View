<template>
  <PageContainer class="view-user-report" :onLoad="handleLoad">
    <div class="tools">
      <ButtonSubmit :onClick="handleCreateTodayData">生成今日数据</ButtonSubmit>
    </div>
    <el-row :gutter="40">
      <el-col :span="12"><ChartRender type="line" title="授权量"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="注册量"></ChartRender></el-col>
    </el-row>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChartRender from '@/components/Charts/ChartRender.vue'
import Service from './Service'
import { getDate } from '@/plugins/tools'

@Component({
  components: {
    ChartRender
  }
})
export default class ViewUserReport extends Vue {
  private handleLoad () {
    return Service.getCurrentMonthData(getDate())
  }

  private handleCreateTodayData () {
    return Service.createTodayData()
  }
}
</script>

<style lang="scss">
.view-user-report {
  .tools {
    margin-bottom: 20px;
  }
}
</style>
