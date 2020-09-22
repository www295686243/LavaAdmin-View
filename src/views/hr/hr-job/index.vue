<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="发布者" :width="100"></TableText>
    <TableText prop="title" label="标题" :minWidth="200"></TableText>
    <TableText prop="company_name" label="公司名" :minWidth="140"></TableText>
    <TableCascader
      prop="city"
      label="城市"
      :minWidth="180"
      :options="ConstService.getAreaOptions()"
      type="city">
    </TableCascader>
    <TableText prop="created_at" label="发布日期" :width="160"></TableText>
    <TableText prop="end_time" label="截止日期" :width="120"></TableText>
    <TableOptions prop="status" label="状态" :width="100"></TableOptions>
    <TableText prop="contacts" label="联系人" :width="100"></TableText>
    <TableText prop="phone" label="联系电话" :width="120"></TableText>
    <TableText prop="admin_user.nickname" label="归属人" :width="100"></TableText>

    <TableAction :buttons="[
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewHrIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
}
</script>
