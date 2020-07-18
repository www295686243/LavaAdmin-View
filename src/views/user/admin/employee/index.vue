<template>
  <PageContainer>
    <TableRender :Service="Service">
      <TableText prop="id" label="ID" :width="180"></TableText>
      <TableText prop="username" label="用户名" :width="120"></TableText>
      <TableText prop="nickname" label="昵称" :width="120"></TableText>
      <TableText prop="roles" label="角色" :width="200" :props="{label: 'display_name'}"></TableText>
      <TableText prop="phone" label="手机号" :width="120"></TableText>
      <TableText prop="created_at" label="注册时间" :width="180"></TableText>
      <TableAction :buttons="[
        { name: '编辑' },
        { name: '删除' }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewUserAdminEmployeeIndex extends Vue {
  private Service = Service
}
</script>
