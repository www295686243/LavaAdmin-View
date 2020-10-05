<template>
  <FormRender :form="form" :Service="Service" :onLoad="handleLoad" :onSubmit="handleSubmit">
    <FormCascader v-model="form.parent_id" :field="formFields.parent_id"></FormCascader>
    <FormInput v-model="form.display_name" :field="formFields.display_name"></FormInput>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewSystemIndustryForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    parent_id: 0,
    display_name: '',
    sort: ''
  } as {
    id: string;
    [key: string]: any;
  }

  private formFields: IFormFields = ValidateService.genRules({
    parent_id: {
      prop: 'parent_id',
      label: '父级',
      options: [],
      props: {
        checkStrictly: true
      }
    },
    display_name: {
      prop: 'display_name',
      label: '名称',
      rule: [ValidateService.required, ValidateService.max(30)]
    }
  })

  private handleLoad () {
    return this.getParentTree()
      .then(() => {
        if (this.form.id) {
          return Service.show(this.form.id)
            .then((res) => {
              Object.keys(this.form).forEach((key: string) => {
                this.form[key] = res.data[key] || this.form[key]
              })
            })
        }
      })
  }

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        if (this.form.id) {
          return Service.update(this.form)
        } else {
          return Service.store(this.form)
        }
      })
      .then((res) => {
        return this.getParentTree()
          .then(() => res)
      })
  }

  private getParentTree () {
    return Service.getParentTree()
      .then((res) => {
        this.formFields.parent_id.options = res.data || []
      })
  }
}
</script>
