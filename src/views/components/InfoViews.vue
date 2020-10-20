<template>
  <TableRender :onLoad="handleLoad">
    <TableText prop="user.nickname" label="访问者" :minWidth="120"></TableText>
    <TableText prop="created_at" label="访问时间" :width="200"></TableText>
  </TableRender>
</template>

<script lang="ts">
import axios from '@/plugins/axios'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class InfoViews extends Vue {
  @Prop()
  params!: { id: string; _model: string };

  private handleLoad (params: any) {
    return axios.get('info_view', {
      ...params,
      id: this.params.id,
      _model: this.params._model
    })
  }
}
</script>
