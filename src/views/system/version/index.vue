<template>
  <PageContainer>
    <TableRender
      :onLoad="() => Service.index()"
      :tableColumns="tableColumns">
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ITableColumns } from '@/interface/common'
import RouterService from '@/service/RouterService'

@Component
export default class ViewSystemVersionIndex extends Vue {
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
          name: '编辑',
          onClick: (row: any) => {
            RouterService.pushForm({ id: row.id })
          }
        }
      ]
    }
  ]
}
</script>
