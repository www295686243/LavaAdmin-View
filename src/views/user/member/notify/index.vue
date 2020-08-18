<template>
  <PageContainer>
    <TableRender :Service="Service" :searchFields="searchFields">
      <TableText prop="user.nickname" label="发送人" :width="160"></TableText>
      <TableText prop="title" label="通知标题" :width="220"></TableText>
      <TableText prop="content" label="通知内容" :width="500"></TableText>
      <TableText prop="url" label="跳转地址" :width="140"></TableText>
      <TableOptions
        prop="is_read"
        label="是否查看"
        :options="ConstService.getBoolOptions()"
        :width="100"
        :bool="true"
        align="center" />
      <TableOptions
        prop="channel"
        label="发送渠道"
        :width="100"
        :options="Service.getTypaNameOptions()"
        align="center" />
      <TableAction :buttons="[
        { name: '查看详情', onClick: (row) => RouterService.push('/user/member/role/permissions', { id: row.id }) }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewUserMemberNotifyIndex extends Vue {
  private Service = Service
  private RouterService = RouterService
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '发送人ID',
      type: 'string'
    }
  ]
}
</script>
