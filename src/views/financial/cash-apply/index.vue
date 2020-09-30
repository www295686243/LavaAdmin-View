<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="申请人" :width="260"></TableText>
    <TableText prop="amount" label="申请金额" :width="120" align="right"></TableText>
    <TableOptions prop="status" label="状态" :width="120"></TableOptions>
    <TableText prop="created_at" label="申请时间" :width="180"></TableText>
    <TableAction :buttons="[
      { name: '账单详情', onClick: handleOpenBill },
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewOtherWeChatNotifyUserIndex extends Vue {
  private Service = Service

  private handleOpenBill (row: { user_id: string }) {
    DialogService.show(require('@/views/user/member/bill/index.vue').default, { id: row.user_id })
  }
}
</script>
