<template>
  <TableRender :Service="Service" ref="table" :searchFields="searchFields">
    <TableText prop="user.nickname" label="发布者" :width="100"></TableText>
    <TableText prop="title" label="标题" :minWidth="200"></TableText>
    <TableCascader
      prop="city"
      label="城市"
      :minWidth="180"
      :options="ConstService.getAreaOptions()"
      type="city">
    </TableCascader>
    <TableText prop="created_at" label="发布日期" :width="160"></TableText>
    <TableText prop="end_time" label="截止日期" :width="120"></TableText>
    <TableOptions prop="status" label="状态" :width="100"></TableOptions>
    <TableText prop="contacts" label="联系人" :width="100"></TableText>
    <TableText prop="phone" label="联系电话" :width="120"></TableText>
    <TableText prop="admin_user.nickname" label="归属人" :width="100"></TableText>

    <TableAction :buttons="[
      { name: '推送', onClick: handlePush },
      { name: '编辑' },
      { name: '删除' },
      { name: '更多', children: [
        { name: '信息转让', onClick: handleTransfer },
        { name: '访问记录', onClick: handleViews }
      ] }
    ]" :minWidth="320" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue, Ref } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewHrIndex extends Vue {
  @Ref()
  table!: any

  private Service = Service
  private ConstService = ConstService

  private handleTransfer (row: { id: string }) {
    DialogService.show(require('@/views/components/TransferInfo.vue').default, { id: row.id, Service })
      .then(() => this.table.reload())
  }

  private handleViews (row: { id: string }) {
    DialogService.show(require('@/views/components/InfoViews.vue').default, { id: row.id, Service })
  }

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '发布人ID',
      type: 'bigInt'
    }
  ]

  private handlePush (row: { id: string }) {
    return Service.dialog(require('@/views/components/InfoPush.vue').default, { id: row.id })
  }
}
</script>
