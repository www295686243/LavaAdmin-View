<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="id" label="ID" :width="100"></TableText>
    <TableText prop="nickname" label="操作人" :width="120"></TableText>
    <TableText prop="method" label="模式" :width="100"></TableText>
    <TableText prop="path" label="路径" :width="400"></TableText>
    <TableText prop="ip" label="IP" :width="120"></TableText>
    <TableOptions prop="status" label="结果" :width="80" :options="[
      { id: 'success', display_name: '成功', color: 'success' },
      { id: 'success', display_name: '失败', color: 'error' }
    ]"></TableOptions>
    <TableText prop="code" label="状态码" :width="80"></TableText>
    <TableText prop="created_at" label="操作时间" :width="180"></TableText>
    <TableText prop="desc" label="描述"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ITableIndexParams, ISearchFields } from '@/interface/common'

@Component
export default class ViewSystemAdminLogIndex extends Vue {
  private Service = Service

  private searchFields: ISearchFields[] = [
    {
      name: 'nickname',
      display_name: '操作人',
      type: 'string'
    }
  ]

  private handleLoad (params: ITableIndexParams) {
    return Service.index({
      ...params
    })
  }
}
</script>
