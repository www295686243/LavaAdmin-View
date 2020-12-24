<template>
  <TableRender :onLoad="handleLoad" :inDialog="!!params">
    <TableText prop="user.nickname" label="访问者" :minWidth="120"></TableText>
    <TableText prop="created_at" label="访问时间" :width="200"></TableText>
  </TableRender>
</template>

<script lang="ts">
import HrAbstract from '@/abstract/HrAbstract'
import axios from '@/plugins/axios'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class InfoViews extends Vue {
  @Prop()
  params!: { id: string; _model: string; share_user_id: string; is_new_user: number; Service: HrAbstract };

  private handleLoad (params: any) {
    return Promise.resolve()
      .then(() => {
        if (this.params.Service) {
          return this.params.Service.getInfoViews({
            id: this.params.id,
            ...params
          })
        } else {
          return axios.get('info_view', {
            ...params,
            id: this.params.id,
            _model: this.params._model,
            share_user_id: this.params.share_user_id,
            is_new_user: this.params.is_new_user
          })
        }
      })
  }
}
</script>
