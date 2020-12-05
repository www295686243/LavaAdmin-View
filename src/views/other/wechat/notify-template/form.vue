<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.template_id" :field="formFields.template_id"></FormInput>
    <FormInput v-model="form.title" :field="formFields.title"></FormInput>
    <FormInput v-model="form.content" :field="formFields.content"></FormInput>
    <FormInput v-model="form.remark" :field="formFields.remark"></FormInput>
    <FormCounter v-model="form.queue" :field="formFields.queue"></FormCounter>
    <FormInput v-model="form.url" :field="formFields.url"></FormInput>
    <FormInput v-model="form.url_params" :field="formFields.url_params"></FormInput>
    <FormInput v-model="form.keyword_names" :field="formFields.keyword_names"></FormInput>
    <FormSwitch v-model="form.is_push_official_account" :field="formFields.is_push_official_account"></FormSwitch>
    <FormSwitch v-model="form.is_push_message" :field="formFields.is_push_message"></FormSwitch>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import ConstService from '@/service/ConstService'

@Component
export default class ViewOtherWeChatNotifyTemplateForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    template_id: '',
    title: '',
    content: '',
    remark: '',
    queue: 5,
    url: '',
    url_params: '',
    keyword_names: '',
    is_push_official_account: 1,
    is_push_message: 1
  }

  private formFields: IFormFields = ValidateService.genRules({
    template_id: {
      prop: 'template_id',
      label: '微信模板ID',
      rule: [ValidateService.required, ValidateService.max(80)]
    },
    title: {
      prop: 'title',
      label: '通知标题',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    content: {
      prop: 'content',
      label: '通知内容',
      rule: [ValidateService.required, ValidateService.max(120)]
    },
    remark: {
      prop: 'remark',
      label: '通知备注',
      rule: [ValidateService.required, ValidateService.max(120)]
    },
    queue: {
      prop: 'queue',
      label: '优先级',
      rule: [ValidateService.required({ type: 'number' }), ValidateService.minNum(1), ValidateService.maxNum(9)]
    },
    url: {
      prop: 'url',
      label: '跳转地址',
      rule: [ValidateService.required, ValidateService.max(120)],
      placeholder: '格式如：/list'
    },
    url_params: {
      prop: 'url_params',
      label: '地址参数',
      rule: [ValidateService.max(120)],
      placeholder: '格式如：id,name'
    },
    keyword_names: {
      prop: 'keyword_names',
      label: '字段名称',
      rule: [ValidateService.required, ValidateService.max(120)],
      placeholder: '格式如：name,姓名|date,日期'
    },
    is_push_official_account: {
      prop: 'is_push_official_account',
      label: '推送公众号',
      options: ConstService.getBoolOptions()
    },
    is_push_message: {
      prop: 'is_push_message',
      label: '推送站内信',
      options: ConstService.getBoolOptions()
    }
  })
}
</script>
