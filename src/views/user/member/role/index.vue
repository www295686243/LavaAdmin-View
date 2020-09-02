<template>
  <TableRender :Service="Service">
    <TableText prop="id" label="ID" :width="180"></TableText>
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableAction :buttons="[
      { name: '权限管理', onClick: (row) => RouterService.push('/user/member/role/permissions', { id: row.id }), permission: 'updatePermissions' },
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'

@Component
export default class ViewUserMemberRoleIndex extends Vue {
  private Service = Service
  private RouterService = RouterService
}
</script>
