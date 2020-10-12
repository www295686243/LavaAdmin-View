<template>
  <FormRender :form="form" :Service="Service" ref="formElement">
    <el-row :gutter="20">
      <el-col :span="12">
        <FormTextarea v-model="form.description" :field="formFields.description"></FormTextarea>
        <FormInput v-model="form.phone" :field="formFields.phone"></FormInput>
        <FormSelect v-model="form.status" :field="formFields.status"></FormSelect>
        <TaskRewards v-model="form.rewards" v-if="isShowReward"></TaskRewards>
        <FormAutocomplete v-model="form.push_text" :field="formFields.push_text" v-if="isShowReward"></FormAutocomplete>
      </el-col>
      <el-col :span="12">
        <TableRender :Service="Service" :onLoad="handleProvideTableLoad" :disableCreate="true" ref="provideTableElement">
          <TableText prop="user.nickname" label="发布人" :minWidth="140"></TableText>
          <TableText prop="description" label="描述" :minWidth="300"></TableText>
          <TableText prop="phone" label="联系电话" :minWidth="140"></TableText>
          <TableOptions prop="status" label="状态" :minWidth="120"></TableOptions>
          <TableText prop="created_at" label="提交时间" :minWidth="160"></TableText>
          <TableText prop="admin_user.nickname" label="操作人" :minWidth="140"></TableText>
          <TableAction :buttons="[
            { name: '编辑' }
          ]" :minWidth="160" />
        </TableRender>

        <TableRender :Service="HrJobService" :onLoad="handleInfoTableLoad" ref="infoTableElement" :disableCreate="true">
          <TableText prop="user.nickname" label="发布者" :width="100"></TableText>
          <TableText prop="title" label="标题" :minWidth="200"></TableText>
          <TableText prop="intro" label="简介" :minWidth="240"></TableText>
          <TableText prop="company_name" label="公司名" :minWidth="140"></TableText>
          <TableText prop="created_at" label="发布日期" :width="160"></TableText>
          <TableText prop="end_time" label="截止日期" :width="120"></TableText>
          <TableOptions prop="status" label="状态" :width="100"></TableOptions>
          <TableText prop="contacts" label="联系人" :width="100"></TableText>
          <TableText prop="phone" label="联系电话" :width="120"></TableText>
          <TableText prop="admin_user.nickname" label="归属人" :width="100"></TableText>
        </TableRender>
      </el-col>
    </el-row>
    <template slot="footer-before-btn">
      <ButtonSubmit :onClick="handleQuery" type="warning">查重</ButtonSubmit>
      <ButtonSubmit :onClick="handleSubmitAndCreate" type="warning">提交并添加</ButtonSubmit>
    </template>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import SqlService from '@/service/SqlService'
import { PromiseResult } from '@/plugins/axios'
import TaskRewards from '@/views/components/TaskRewards.vue'
import HrJobService from '@/views/hr/hr-job/Service'

@Component({
  components: {
    TaskRewards
  }
})
export default class ViewInfoProvideForm extends Vue {
  @Ref()
  provideTableElement!: any

  @Ref()
  formElement!: any

  get isShowReward () {
    return this.form.status !== ConstService.getOptionsValue(93, '待审核') && !!this.form.id && this.form.is_admin === 0 && this.form.is_reward === 0
  }

  private Service = Service
  private HrJobService = HrJobService
  private form = {
    id: RouterService.query('id'),
    user_id: 0,
    description: '',
    phone: '',
    status: ConstService.getOptionsValue(93, '待审核'),
    _model: RouterService.query('_model'),
    rewards: [],
    is_admin: 0,
    is_reward: 0,
    push_text: '',
    info_provideable_type: '',
    info_provideable_id: 0
  }

  private formFields: IFormFields = ValidateService.genRules({
    description: {
      prop: 'description',
      label: '描述',
      rule: [ValidateService.required, ValidateService.max(255)]
    },
    phone: {
      prop: 'phone',
      label: '电话',
      rule: [ValidateService.required, ValidateService.phone]
    },
    status: {
      prop: 'status',
      label: '状态'
    },
    push_text: {
      prop: 'push_text',
      label: '推送文案',
      width: '100%',
      options: [
        { value: '您分享的招聘已提交过，也感谢您的提供，送您1张求职卷，希望能帮到您' },
        { value: '您分享的招聘信息客服已沟通审核提交推送，感谢您的热心分享，赠送您一张求职卷，希望能帮到您' },
        { value: '分享的招聘信息无法联系，也谢谢您的分享，赠送一张求职卷！' },
        { value: '分享的招聘信息已招到了，感谢您的互助提供，赠送一张求职卷，希望能帮到您' }
      ],
      rule: [ValidateService.required]
    }
  })

  private handleProvideTableLoad (params: { page: number }) {
    const _search = (new SqlService())
      .orWheres([
        { field: 'description', operator: '=', value: this.form.description },
        { field: 'phone', operator: '=', value: this.form.phone }
      ])
      .where({ field: 'id', operator: '<>', value: this.form.id })
      .get()
    return Service.index({
      ...params,
      _search
    })
  }

  private handleInfoTableLoad (params: { page: number }) {
    const _search = (new SqlService())
      .orWheres([
        { field: 'intro', operator: '=', value: this.form.description },
        { field: 'phone', operator: '=', value: this.form.phone }
      ])
      .where({ field: 'id', operator: '<>', value: this.form.info_provideable_id })
      .get()
    return HrJobService.index({
      ...params,
      _search
    })
  }

  private handleQuery () {
    this.provideTableElement.reload()
  }

  private handleSubmitAndCreate () {
    return this.formElement.handleSubmit()
      .then((res: PromiseResult) => {
        this.form.user_id = res.data.user_id || this.form.user_id
        if (this.form._model === 'Info/Hr/HrJob') {
          RouterService.push('/hr/job/form', {
            provide_user_id: this.form.user_id,
            description: this.form.description,
            phone: this.form.phone,
            info_provide_id: res.data.id,
            id: this.form.info_provideable_id
          })
        }
      })
  }
}
</script>
