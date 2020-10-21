<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="name" label="标识" :width="300"></TableText>
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableAction :buttons="[
      { name: '配置选项', onClick: (row) => RouterService.push('config-options', { config_id: row.id }) },
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="240" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
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
}
</script>
