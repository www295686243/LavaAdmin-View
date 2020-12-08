<template>
  <div class="view-report-user">
    <div class="tools">
      <ButtonSubmit :onClick="handleCreateTodayData">生成今日数据</ButtonSubmit>
    </div>
    <el-row :gutter="40">
      <el-col :span="12"><ChartRender type="line" title="总订单" code="order_total"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="首次支付" code="order_first_pay"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="职位订单" code="hr_job_order"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="职位首次支付" code="hr_job_first_order_pay"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="简历订单" code="hr_resume_order"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="简历首次支付" code="hr_resume_first_order_pay"></ChartRender></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChartRender from '@/components/Charts/ChartRender.vue'
import ChartService from '@/service/ChartService'

@Component({
  components: {
    ChartRender
  }
})
export default class ViewReportUser extends Vue {
  private handleCreateTodayData () {
    return ChartService.createTodayData()
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
