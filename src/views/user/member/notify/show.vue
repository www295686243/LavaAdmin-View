<template>
  <FormRender :Service="Service" :form="info">
    <FormInput v-model="info.title" :field="formFields.title"></FormInput>
    <FormInput v-model="info.content" :field="formFields.content"></FormInput>
    <FormInput v-model="info.remark" :field="formFields.remark"></FormInput>
    <FormInput v-model="info.url" :field="formFields.url"></FormInput>
    <FormInput v-model="info.url_params" :field="formFields.url_params"></FormInput>
    <FormInput v-model="info.keyword_names" :field="formFields.keyword_names"></FormInput>
    <FormInput v-model="info.keywords" :field="formFields.keywords"></FormInput>
    <FormRadio v-model="info.is_read" :field="formFields.is_read"></FormRadio>
    <FormSwitch v-model="info.is_push_official_account" :field="formFields.is_push_official_account"></FormSwitch>
    <FormSwitch v-model="info.is_push_message" :field="formFields.is_push_message"></FormSwitch>
    <div slot="footer"></div>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class ViewUserMemberNotifyShow extends Vue {
  @Prop()
  params!: { id: string }

  private Service = Service
  private info = {
    id: this.params.id,
    title: '',
    user_id: '',
    url: '',
    url_params: {} as { [key: string]: string },
    content: '',
    remark: '',
    keywords: {} as { [key: string]: string },
    keyword_names: {} as { [key: string]: string },
    is_read: 0,
    is_push_official_account: 1,
    is_push_message: 1
  }

  private formFields: IFormFields = {
    title: {
      prop: 'title',
      label: '标题',
      disabled: true
    },
    content: {
      prop: 'content',
      label: '通知内容',
      disabled: true
    },
    remark: {
      prop: 'remark',
      label: '通知备注',
      disabled: true
    },
    url: {
      prop: 'url',
      label: '链接地址',
      disabled: true
    },
    url_params: {
      prop: 'url_params',
      label: '链接参数',
      disabled: true
    },
    keywords: {
      prop: 'keywords',
      label: '参数值',
      disabled: true
    },
    keyword_names: {
      prop: 'keyword_names',
      label: '参数名称',
      disabled: true
    },
    is_read: {
      prop: 'is_read',
      label: '是否查看',
      options: ConstService.getBoolOptions(),
      disabled: true
    },
    is_push_official_account: {
      prop: 'is_push_official_account',
      label: '推送公众号',
      options: ConstService.getBoolOptions(),
      disabled: true
    },
    is_push_message: {
      prop: 'is_push_message',
      label: '推送站内信',
      options: ConstService.getBoolOptions(),
      disabled: true
    }
  }
}
</script>
