<template>
  <TableRender :Service="Service">
    <TableText prop="user_id" label="用户ID" :width="260"></TableText>
    <TableText prop="user.nickname" label="用户昵称" :width="260"></TableText>
    <TableAction :buttons="[
      { name: '删除' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewOtherWeChatNotifyUserIndex extends Vue {
  private Service = Service
}
</script>
