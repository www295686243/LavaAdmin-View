<template>
  <FormRender :form="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormGiveCoupon v-model="form.rewards" :col="2"></FormGiveCoupon>
  </FormRender>
</template>

<script lang="ts">
import axios from '@/plugins/axios'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ViewComponentGiveCoupon extends Vue {
  @Prop()
  params!: { user_id: string }

  private form = {
    rewards: [],
    user_id: this.params.user_id
  }

  private handleSubmit () {
    return axios.post('user_coupon', this.form)
      .then((res) => {
        this.$emit('done')
        return res
      })
  }
}
</script>
