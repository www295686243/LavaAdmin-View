<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="昵称" :width="160"></TableText>
    <TableText prop="user.phone" label="手机号" :width="160"></TableText>
    <TableText prop="company" label="公司名" :width="200"></TableText>
    <TableText prop="business_license" label="营业执照" :width="180"></TableText>
    <TableOptions prop="status" label="状态" :width="100"></TableOptions>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewUserMemberEnterpriseAuthIndex extends Vue {
  private Service = Service
}
</script>
