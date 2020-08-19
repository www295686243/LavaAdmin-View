<template>
  <FormRender :data="data" :Service="Service">
    <FormText v-model="data.template_id" :field="formFields.template_id"></FormText>
    <FormText v-model="data.title" :field="formFields.title"></FormText>
    <FormText v-model="data.content" :field="formFields.content"></FormText>
    <FormText v-model="data.remark" :field="formFields.remark"></FormText>
    <FormText v-model="data.url" :field="formFields.url"></FormText>
    <FormText v-model="data.url_params" :field="formFields.url_params"></FormText>
    <FormText v-model="data.keyword_names" :field="formFields.keyword_names"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

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
    keyword_names: ''
  }

  private formFields: IFormFields = {
    template_id: ValidateService.genRule({
      prop: 'template_id',
      label: '微信模板ID',
      rule: [ValidateService.required, ValidateService.max(80)]
    }),
    title: ValidateService.genRule({
      prop: 'title',
      label: '通知标题',
      rule: [ValidateService.required, ValidateService.max(60)]
    }),
    content: ValidateService.genRule({
      prop: 'content',
      label: '通知内容',
      rule: [ValidateService.required, ValidateService.max(120)]
    }),
    remark: ValidateService.genRule({
      prop: 'remark',
      label: '通知备注',
      rule: [ValidateService.required, ValidateService.max(120)]
    }),
    url: ValidateService.genRule({
      prop: 'url',
      label: '跳转地址',
      rule: [ValidateService.required, ValidateService.max(120)]
    }),
    url_params: ValidateService.genRule({
      prop: 'url_params',
      label: '地址参数',
      rule: [ValidateService.max(120)]
    }),
    keyword_names: ValidateService.genRule({
      prop: 'keyword_names',
      label: '字段名称',
      rule: [ValidateService.required, ValidateService.max(120)]
    })
  }
}
</script>
