<template>
  <FormRender :form="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormText v-model="form.transfer_user_id" :field="formFields.transfer_user_id"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IFormFields } from '@/interface/common'
import axios from '@/plugins/axios'
import ValidateService from '@/service/ValidateService'

@Component
export default class TransferInfo extends Vue {
  @Prop()
  params!: { id: string; type: string }

  private form = {
    transfer_user_id: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    transfer_user_id: {
      prop: 'transfer_user_id',
      label: '用户ID',
      rule: [ValidateService.required]
    }
  })

  private handleSubmit () {
    return axios.post(`${this.params.type}/transfer`, {
      info_id: this.params.id,
      ...this.form
    })
      .then((res) => {
        this.$emit('done')
        return res
      })
  }
}
</script>

<style lang="scss">
.TransferInfo {
  .el-dialog__body {
    height: 300px;
    padding: 0;
  }
}
</style>
