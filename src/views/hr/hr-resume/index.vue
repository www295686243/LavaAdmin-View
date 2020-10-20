<template>
  <TableRender :Service="Service" ref="table">
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
      { name: '编辑' },
      { name: '删除' },
      { name: '更多', children: [
        { name: '信息转让', onClick: handleTransfer },
        { name: '访问记录', onClick: handleViews }
      ] }
    ]" :minWidth="230" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue, Ref } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewHrIndex extends Vue {
  @Ref()
  table!: any

  private Service = Service
  private ConstService = ConstService

  private handleTransfer (row: { id: string }) {
    DialogService.show(require('@/views/components/TransferInfo.vue').default, { id: row.id, hideCloseBtn: true, type: 'hr_resume' })
      .then(() => this.table.reload())
  }

  private handleViews (row: { id: string }) {
    DialogService.show(require('@/views/components/InfoViews.vue').default, { id: row.id, _model: Service.modelName })
  }
}
</script>
