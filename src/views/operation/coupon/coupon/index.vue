<template>
  <PageContainer>
    <TableRender :Service="Service" :searchFields="searchFields">
      <TableText prop="template_id" label="微信模板ID" :width="400"></TableText>
      <TableText prop="title" label="通知标题" :width="260"></TableText>
      <TableText prop="content" label="通知内容" :width="300"></TableText>
      <TableText prop="remark" label="通知备注" :width="360"></TableText>
      <TableText prop="url" label="跳转地址" :width="160"></TableText>
      <TableText prop="keyword_names" label="字段名称" :width="260"></TableText>
      <TableOptions prop="is_push_official_account" label="推送公众号" :width="100" :options="ConstService.getBoolOptions()"></TableOptions>
      <TableOptions prop="is_push_message" label="推送站内信" :width="100" :options="ConstService.getBoolOptions()"></TableOptions>
      <TableAction :buttons="[
        { name: '编辑' },
        { name: '删除' }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class ViewSystemConfigIndex extends Vue {
  private Service = Service
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'template_id',
      display_name: '微信模板ID',
      type: 'string'
    }
  ]
}
</script>
