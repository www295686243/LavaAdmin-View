<template>
  <PageContainer>
    <TableRender :Service="Service">
      <TableText prop="id" label="ID" :width="180"></TableText>
      <TableText prop="nickname" label="姓名" :width="200"></TableText>
      <TableText prop="roles" label="角色" :width="200" :props="{label: 'display_name'}"></TableText>
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
export default class ViewUserMemberUserIndex extends Vue {
  private Service = Service
}
</script>
