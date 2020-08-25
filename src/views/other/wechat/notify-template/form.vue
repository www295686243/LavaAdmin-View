<template>
  <FormRender :data="data" :Service="Service">
    <FormText v-model="data.template_id" :field="formFields.template_id"></FormText>
    <FormText v-model="data.title" :field="formFields.title"></FormText>
    <FormText v-model="data.content" :field="formFields.content"></FormText>
    <FormText v-model="data.remark" :field="formFields.remark"></FormText>
    <FormText v-model="data.url" :field="formFields.url"></FormText>
    <FormText v-model="data.url_params" :field="formFields.url_params"></FormText>
    <FormText v-model="data.keyword_names" :field="formFields.keyword_names"></FormText>
    <FormSwitch v-model="data.is_push_official_account" :field="formFields.is_push_official_account"></FormSwitch>
    <FormSwitch v-model="data.is_push_message" :field="formFields.is_push_message"></FormSwitch>
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
export default class PlatformConfigBaseForm extends Vue {
  private Service = Service
  private data = {
    id: RouterService.query('id'),
    template_id: '',
    title: '',
    content: '',
    remark: '',
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
