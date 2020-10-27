<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="id" label="ID" :width="180"></TableText>
    <TableText prop="nickname" label="昵称" :width="200"></TableText>
    <TableText prop="roles" label="角色" :width="200" :props="{label: 'display_name'}"></TableText>
    <TableText prop="created_at" label="注册时间" :width="180"></TableText>
    <TableAction :buttons="[
      { name: '赠送优惠券', onClick: giveCoupon },
      { name: '编辑' },
      { name: '更多', children: [
        { name: '账单记录', onClick: (row) => handlePopover(row, '/user/member/bill/index') },
        { name: '订单记录', onClick: (row) => handlePopover(row, '/user/member/order/index') }
      ] }
    ]" :minWidth="300" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewUserMemberUserIndex extends Vue {
  private Service = Service

  private searchFields: ISearchFields[] = [
    {
      name: 'nickname',
      display_name: '昵称',
      type: 'string'
    }
  ]

  private giveCoupon (row: { id: number }) {
    return DialogService.show(require('@/views/components/GiveCoupon.vue').default, { user_id: row.id, hideCloseBtn: true })
  }

  private handlePopover (row: { id: number }, path: string) {
    return DialogService.show(require(`@/views${path}.vue`).default, { id: row.id })
  }
}
</script>
