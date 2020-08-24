<template>
  <PageContainer class="view-user-report">
    <!-- <div class="tools">
      <ButtonSubmit :onClick="handleCreateTodayData">生成今日数据</ButtonSubmit>
    </div> -->
    <el-row :gutter="40">
      <el-col :span="12"><ChartRender type="line" title="授权量" code="auth"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="注册量" code="register"></ChartRender></el-col>
      <el-col :span="12"><ChartRender type="line" title="登录量" code="login"></ChartRender></el-col>
    </el-row>
  </PageContainer>
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
export default class ViewUserReport extends Vue {
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
