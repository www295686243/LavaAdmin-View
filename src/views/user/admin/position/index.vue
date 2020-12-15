<template>
  <TableRender :Service="Service">
    <TableText prop="id" label="ID" :width="180"></TableText>
    <TableText prop="name" label="标识" :width="240"></TableText>
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableAction :buttons="[
      { name: '权限管理', onClick: (row) => RouterService.push('/user/admin/position/permissions', { id: row.id }), permission: 'updatePermissions' },
      { name: '后端权限分配', onClick: (row) => RouterService.push('/user/admin/position/assign_permissions', { id: row.id }), permission: 'updateAssignPermissions' },
      { name: '前端权限分配', onClick: (row) => RouterService.push('/user/member/role/assign_permissions', { id: row.id }), permission: 'updateAssignPermissions' },
      { name: '编辑' }
    ]" :minWidth="400" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'

@Component
export default class ViewUserAdminPositionIndex extends Vue {
  private Service = Service
  private RouterService = RouterService
}
</script>
