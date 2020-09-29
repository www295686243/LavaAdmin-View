<template>
  <el-tabs v-model="activeName" tab-position="left" class="view-user-form">
    <el-tab-pane label="账户信息" name="base" lazy><BaseForm></BaseForm></el-tab-pane>
    <el-tab-pane label="个人基本信息" name="base-personal" lazy><PersonalBaseForm></PersonalBaseForm></el-tab-pane>
    <el-tab-pane label="个人详细信息" name="detail-personal" lazy><PersonalDetailForm></PersonalDetailForm></el-tab-pane>
    <el-tab-pane label="企业信息" name="enterprise" lazy><EnterpriseForm></EnterpriseForm></el-tab-pane>
    <el-tab-pane label="基本控制" name="control" lazy><ControlForm></ControlForm></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseForm from './base/form.vue'
import PersonalBaseForm from './personal/baseForm.vue'
import PersonalDetailForm from './personal/detailForm.vue'
import EnterpriseForm from './enterprise/form.vue'
import ControlForm from './control/form.vue'

@Component({
  components: {
    BaseForm,
    PersonalBaseForm,
    PersonalDetailForm,
    EnterpriseForm,
    ControlForm
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
