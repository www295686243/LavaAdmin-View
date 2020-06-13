<template>
  <PageContainer>
    <TableRender
      :addBtnText="Service.name"
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
export default class ViewUserMemberRoleIndex extends Vue {
  private Service = Service

  private tableColumns: ITableColumns[] = [
    {
      prop: 'id',
      label: 'ID',
      width: 120
    },
    {
      prop: 'display_name',
      label: '名称',
      width: 200
    },
    {
      prop: '_action',
      label: '操作',
      minWidth: 160,
      actions: [
        {
          name: '权限管理',
          onClick: (row: any) => {
            RouterService.push('/user/member/role/permissions', { id: row.id })
          },
          permission: 'updatePermissions'
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
}
</script>
