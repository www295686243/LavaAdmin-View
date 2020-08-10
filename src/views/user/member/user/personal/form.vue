<template>
  <FormRender :onLoad="handleLoad" :data="data" :Service="Service">
    <FormSelect v-model="data.role_names" :field="formFields.role_names"></FormSelect>
    <FormText v-model="data.username" :field="formFields.username"></FormText>
    <FormText v-model="data.password" :field="formFields.password"></FormText>
    <FormText v-model="data.nickname" :field="formFields.nickname"></FormText>
    <FormText v-model="data.phone" :field="formFields.phone"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import RoleService from '@/views/user/member/role/Service'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewUserMemberUserPersonalForm extends Vue {
  private Service = Service
  private data = {
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
      rule: [ValidateService.loginPassword, this.data.id ? ValidateService.optional : ValidateService.required]
    }),
    nickname: ValidateService.genRule({
      prop: 'nickname',
      label: '昵称',
      rule: [ValidateService.nickname]
    }),
    phone: ValidateService.genRule({
      prop: 'phone',
      label: '手机号',
      rule: [ValidateService.phone]
    })
  }

  private handleLoad () {
    return this.fetchRoleList()
      .then(() => {
        if (this.data.id) {
          return Service.show(this.data.id)
            .then((res) => {
              res.data.role_names = res.data.roles.map((res: { name: string }) => res.name)
              Object.assign(this.data, res.data)
            })
        }
      })
  }

  private fetchRoleList () {
    return RoleService.index()
      .then((res) => {
        this.formFields.role_names.options = res.data
      })
  }
}
</script>
