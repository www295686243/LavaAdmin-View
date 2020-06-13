<template>
  <PageContainer>
    <TableRender
      :searchFields="searchFields"
      :onLoad="handleLoad"
      :tableColumns="tableColumns">
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ITableColumns, ITableIndexParams, ISearchFields } from '@/interface/common'

@Component
export default class ViewSystemAdminLogIndex extends Vue {
  private Service = Service

  private tableColumns: ITableColumns[] = [
    {
      label: 'ID',
      prop: 'id',
      width: 100
    },
    {
      label: '操作人',
      prop: 'nickname',
      width: 120
    },
    {
      label: '模式',
      prop: 'method',
      width: 100
    },
    {
      label: '路径',
      prop: 'path',
      width: 200
    },
    {
      label: 'IP',
      prop: 'ip',
      width: 120
    },
    {
      label: '状态',
      prop: 'status',
      width: 80
    },
    {
      label: '状态码',
      prop: 'code',
      width: 80
    },
    {
      label: '操作时间',
      prop: 'created_at',
      width: 180
    },
    {
      label: '描述',
      prop: 'desc'
    }
  ]

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
