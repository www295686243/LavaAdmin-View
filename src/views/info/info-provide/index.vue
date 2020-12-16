<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="user.nickname" label="发布人" :minWidth="140"></TableText>
    <TableText prop="description" label="描述" :minWidth="300"></TableText>
    <TableText prop="phone" label="联系电话" :minWidth="140"></TableText>
    <TableOptions prop="status" label="状态" :minWidth="120"></TableOptions>
    <TableText prop="created_at" label="提交时间" :minWidth="160"></TableText>
    <TableText prop="admin_user.nickname" label="操作人" :minWidth="140"></TableText>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { ISearchFields } from '@/interface/common'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewInfoProvideIndex extends Vue {
  private Service = new Service()

  private searchFields: ISearchFields[] = [
    {
      name: 'status',
      display_name: '状态',
      type: 'intOptions',
      options: this.Service.getOptions('status')
    }
  ]
}
</script>
