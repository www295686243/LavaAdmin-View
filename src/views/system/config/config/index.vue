<template>
  <PageContainer>
    <TableRender
      :addBtnText="Service.name"
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
import RouterService from '@/service/RouterService'

@Component
export default class ViewSystemConfigIndex extends Vue {
  private Service = Service

  private tableColumns: ITableColumns[] = [
    {
      prop: 'id',
      label: 'ID',
      width: 120
    },
    {
      prop: 'name',
      label: '标识',
      width: 200
    },
    {
      prop: 'display_name',
      label: '名称',
      width: 200
    },
    {
      prop: 'value',
      label: '值',
      width: 160
    },
    {
      prop: '_action',
      label: '操作',
      minWidth: 160,
      actions: [
        {
          name: '选项配置',
          onClick: (row: any) => {
            RouterService.push('/system/config/config-option', { config_id: row.id })
          }
        },
        {
          name: '编辑',
          onClick: (row: any) => {
            RouterService.pushForm({ id: row.id })
          }
        },
        {
          name: '删除',
          onClick: (row: any) => Service.destroy(row.id)
        }
      ]
    }
  ]

  private searchFields: ISearchFields[] = [
    {
      name: 'name',
      display_name: '标识',
      type: 'string'
    },
    {
      name: 'display_name',
      display_name: '名称',
      type: 'string'
    }
  ]

  private handleLoad (params: ITableIndexParams) {
    return Service.index({
      ...params,
      guard_name: 'system'
    })
  }
}
</script>
