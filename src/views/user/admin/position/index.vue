<template>
  <TableRender :Service="Service">
    <TableText prop="name" label="标识" :width="300"></TableText>
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableAction :buttons="[
      { name: '权限管理', onClick: (row) => RouterService.push('/user/admin/position/permissions', { id: row.id }), permission: 'updatePermissions' },
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
