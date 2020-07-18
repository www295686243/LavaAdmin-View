<template>
  <PageContainer>
    <TableRender :Service="Service" :searchFields="searchFields" :onLoad="handleLoad">
      <TableText prop="id" label="ID" :width="120"></TableText>
      <TableText prop="name" label="标识" :width="200"></TableText>
      <TableText prop="display_name" label="名称" :width="200"></TableText>
      <TableText prop="value" label="值" :width="160"></TableText>
      <TableAction :buttons="[
        { name: '选项配置', onClick: (row) => RouterService.push('/system/config/config-option', { config_id: row.id }) },
        { name: '编辑' },
        { name: '删除' }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ITableIndexParams, ISearchFields } from '@/interface/common'
import RouterService from '@/service/RouterService'

@Component
export default class ViewSystemConfigIndex extends Vue {
  private Service = Service
  private RouterService = RouterService

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
