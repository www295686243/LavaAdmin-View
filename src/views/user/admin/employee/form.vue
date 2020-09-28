<template>
  <FormRender :onLoad="handleLoad" :data="form" :Service="Service">
    <FormSelect v-model="form.role_names" :field="formFields.role_names"></FormSelect>
    <FormText v-model="form.username" :field="formFields.username"></FormText>
    <FormText v-model="form.password" :field="formFields.password"></FormText>
    <FormText v-model="form.nickname" :field="formFields.nickname"></FormText>
    <FormText v-model="form.phone" :field="formFields.phone"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import PositionService from '../position/Service'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewUserAdminEmployeeForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    role_names: [],
    username: '',
    password: '',
    nickname: '',
    phone: ''
  }

  private formFields: IFormFields = {
    role_names: ValidateService.genRule({
      prop: 'role_names',
      label: '角色',
      options: [],
      multiple: true,
      props: {
        value: 'name',
        label: 'display_name'
      },
      rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
    }),
    username: ValidateService.genRule({
      prop: 'username',
      label: '用户名',
      rule: [ValidateService.username]
    }),
    password: ValidateService.genRule({
      prop: 'password',
      label: '密码',
      rule: [ValidateService.loginPassword, this.form.id ? ValidateService.optional : ValidateService.required]
    }),
    nickname: ValidateService.genRule({
      prop: 'nickname',
      label: '昵称',
      rule: [ValidateService.nickname]
    }),
    phone: ValidateService.genRule({
      prop: 'phone',
      label: '手机号',
      rule: [ValidateService.mobile]
    })
  }

  private handleLoad () {
    return this.fetchRoleList()
      .then(() => {
        if (this.form.id) {
          return Service.show(this.form.id)
            .then((res) => {
              res.data.role_names = res.data.roles.map((res: { name: string }) => res.name)
              Object.assign(this.form, res.data)
            })
        }
      })
  }

  private fetchRoleList () {
    return PositionService.index()
      .then((res) => {
        this.formFields.role_names.options = res.data
      })
  }
}
</script>
