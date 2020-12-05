<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="template_id" label="微信模板ID" :width="220"></TableText>
    <TableText prop="title" label="通知标题" :width="260"></TableText>
    <TableText prop="content" label="通知内容" :width="260"></TableText>
    <TableText prop="remark" label="通知备注" :width="400"></TableText>
    <TableText prop="url" label="跳转地址" :width="160"></TableText>
    <TableText prop="queue" label="优先级" :width="100"></TableText>
    <TableText prop="keyword_names" label="字段名称" :width="260"></TableText>
    <TableOptions prop="is_push_official_account" label="推送公众号" :width="100" :options="ConstService.getBoolOptions()"></TableOptions>
    <TableOptions prop="is_push_message" label="推送站内信" :width="100" :options="ConstService.getBoolOptions()"></TableOptions>
    <TableAction :buttons="[
      { name: '通知用户', onClick: (row) => RouterService.push('/other/wechat/notify-user', { notify_template_id: row.id }) },
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="260" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import ConstService from '@/service/ConstService'
import RouterService from '@/service/RouterService'

@Component
export default class ViewOtherWeChatNotifyTemplateIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
  private RouterService = RouterService

  private searchFields: ISearchFields[] = [
    {
      name: 'template_id',
      display_name: '微信模板ID',
      type: 'string'
    }
  ]
}
</script>
