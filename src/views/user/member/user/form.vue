<template>
  <el-tabs v-model="activeName" tab-position="left" class="view-user-form">
    <el-tab-pane label="基本信息" name="base" lazy><BaseForm></BaseForm></el-tab-pane>
    <el-tab-pane label="个人信息" name="personal" lazy><PersonalForm></PersonalForm></el-tab-pane>
    <el-tab-pane label="企业信息" name="enterprise" lazy>角色管理</el-tab-pane>
    <el-tab-pane label="基本控制" name="control" lazy>定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseForm from './base/form.vue'
import PersonalForm from './personal/form.vue'

@Component({
  components: {
    BaseForm,
    PersonalForm
  }
})
export default class ViewUserMemberUserForm extends Vue {
  private activeName = 'base'
}
</script>

<style lang="scss">
.view-user-form {
  height: 100%;
  .el-tabs__content {
    height: 100%;
    .el-tab-pane {
      height: 100%;
    }
  }
}
</style>
