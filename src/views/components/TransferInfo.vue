<template>
  <FormRender :form="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormInput v-model="form.transfer_user_id" :field="formFields.transfer_user_id"></FormInput>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IFormFields, IService } from '@/interface/common'
import { PromiseResult } from '@/plugins/axios'
import ValidateService from '@/service/ValidateService'

interface Service extends IService {
  transfer: Function;
}

@Component
export default class TransferInfo extends Vue {
  @Prop()
  params!: { id: string; Service: Service }

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
    return this.params.Service.transfer({
      id: this.params.id,
      ...this.form
    })
      .then((res: PromiseResult) => {
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
