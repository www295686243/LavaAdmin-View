<template>
  <FormRender :form="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormMultipleCascader v-model="form.industries" :field="formFields.industries" type="industry"></FormMultipleCascader>
    <FormMultipleCascader v-model="form.cities" :field="formFields.cities" type="city"></FormMultipleCascader>
  </FormRender>
</template>

<script lang="ts">
import { IService } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class InfoViews extends Vue {
  @Prop()
  params!: { id: string };

  @Prop()
  Service!: IService

  private form = {
    id: this.params.id,
    industries: [],
    cities: []
  }

  private formFields = ValidateService.genRules({
    industries: {
      prop: 'industries',
      label: '行业',
      rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
    },
    cities: {
      prop: 'cities',
      label: '城市',
      rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
    }
  })

  private handleSubmit () {
    return this.Service.push(this.form)
  }
}
</script>
