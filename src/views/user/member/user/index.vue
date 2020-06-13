<template>
  <PageContainer>
    <TableRender
      :onLoad="(params) => Service.index(params)"
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
export default class ViewUserMemberUserIndex extends Vue {
  private Service = Service

  private tableColumns: ITableColumns[] = [
    {
      prop: 'id',
      label: 'ID',
      width: 180
    },
    {
      prop: 'nickname',
      label: '姓名',
      width: 200
    },
    {
      prop: 'roles',
      label: '角色',
      props: {
        label: 'display_name'
      },
      width: 200
    },
    {
      prop: 'created_at',
      label: '注册时间',
      width: 180
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
        },
        {
          name: '删除',
          onClick: (row: any) => Service.destroy(row.id)
        }
      ]
    }
  ]
}
</script>
