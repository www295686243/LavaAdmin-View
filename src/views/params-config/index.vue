<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="id" label="ID" :width="120"></TableText>
    <TableText prop="name" label="标识" :width="200"></TableText>
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableText prop="value" label="值" :width="160"></TableText>
    <TableAction :buttons="[
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="160" />
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
