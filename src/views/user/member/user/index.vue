<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="id" label="ID" :width="180"></TableText>
    <TableText prop="nickname" label="昵称" :width="200"></TableText>
    <TableText prop="roles" label="角色" :width="200" :props="{label: 'display_name'}"></TableText>
    <TableText prop="register_at" label="注册时间" :width="180"></TableText>
    <TableText prop="created_at" label="授权时间" :width="180"></TableText>
    <TableOptions prop="is_follow_official_account" label="是否关注" :minWidth="100" :options="ConstService.getBoolOptions()" :bool="true"></TableOptions>
    <TableText prop="invite_user.nickname" label="邀请人" :width="200"></TableText>
    <TableAction :buttons="[
      { name: '赠送优惠券', onClick: giveCoupon, permission: 'UserCouponController@store' },
      { name: '编辑' },
      { name: '更多', children: [
        { name: '账单记录', onClick: (row) => handlePopover(row, '/user/member/bill/index'), permission: 'UserBillController@index' },
        { name: '订单记录', onClick: (row) => handlePopover(row, '/user/member/order/index'), permission: 'UserOrderController@index' }
      ] }
    ]" :minWidth="300" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import DialogService from '@/service/DialogService/Service'
import ConstService from '@/service/ConstService'

@Component
export default class ViewUserMemberUserIndex extends Vue {
  private Service = Service
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'id',
      display_name: 'ID',
      type: 'bigInt'
    },
    {
      name: 'nickname',
      display_name: '昵称',
      type: 'string'
    },
    {
      name: 'phone',
      display_name: '手机号',
      type: 'string'
    },
    {
      name: 'is_follow_official_account',
      display_name: '是否关注公众号',
      type: 'int'
    },
    {
      name: 'last_login_at',
      display_name: '最后登录时间',
      type: 'datetime'
    },
    {
      name: 'register_at',
      display_name: '注册时间',
      type: 'datetime'
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
