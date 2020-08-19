<template>
  <FormRender :Service="Service" :data="info">
    <FormText v-model="info.title" :field="formFields.title"></FormText>
    <FormText v-model="info.content" :field="formFields.content"></FormText>
    <FormText v-model="info.remark" :field="formFields.remark"></FormText>
    <FormText v-model="info.url" :field="formFields.url"></FormText>
    <FormText v-model="info.url_params" :field="formFields.url_params"></FormText>
    <FormText v-model="info.keywords" :field="formFields.keywords"></FormText>
    <FormRadio v-model="info.is_read" :field="formFields.is_read"></FormRadio>
    <FormRadio v-model="info.channel" :field="formFields.channel"></FormRadio>
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
  id!: string

  @Prop({ default: false })
  dialog!: boolean

  private Service = Service
  private info = {
    id: this.id,
    title: '',
    user_id: '',
    url: '',
    url_params: {} as { [key: string]: string },
    content: '',
    remark: '',
    keywords: {} as { [key: string]: string },
    keyword_names: {} as { [key: string]: string },
    is_read: 0,
    channel: ''
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
      label: '参数字段',
      disabled: true
    },
    is_read: {
      prop: 'is_read',
      label: '是否查看',
      options: ConstService.getBoolOptions(),
      disabled: true
    },
    channel: {
      prop: 'channel',
      label: '发送渠道',
      options: Service.getTypaNameOptions(),
      disabled: true
    }
  }
}
</script>
