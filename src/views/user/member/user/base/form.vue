<template>
  <FormRender :onLoad="handleLoad" :form="form" :Service="Service">
    <FormSelect v-model="form.role_names" :field="formFields.role_names"></FormSelect>
    <FormImage v-model="form.head_url" :field="formFields.head_url"></FormImage>
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
import RoleService from '@/views/user/member/role/Service'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewUserMemberUserBaseForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    role_names: [],
    head_url: '',
    username: '',
    password: '',
    nickname: '',
    phone: ''
  } as {
    [key: string]: any;
  }

  private formFields: IFormFields = ValidateService.genRules({
    role_names: {
      prop: 'role_names',
      label: '角色',
      options: [],
      multiple: true,
      props: {
        value: 'name',
        label: 'display_name'
      },
      rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
    },
    head_url: {
      prop: 'head_url',
      label: '头像'
    },
    username: {
      prop: 'username',
      label: '用户名',
      rule: [ValidateService.username]
    },
    password: {
      prop: 'password',
      label: '密码',
      rule: [ValidateService.loginPassword, this.form.id ? ValidateService.optional : ValidateService.required]
    },
    nickname: {
      prop: 'nickname',
      label: '昵称',
      rule: [ValidateService.nickname]
    },
    phone: {
      prop: 'phone',
      label: '手机号',
      rule: [ValidateService.mobile]
    }
  })

  private handleLoad () {
    return this.fetchRoleList()
      .then(() => {
        if (this.form.id) {
          return Service.show(this.form.id)
            .then((res) => {
              res.data.role_names = res.data.roles.map((res: { name: string }) => res.name)
              Object.keys(this.form).forEach((key: string) => {
                this.form[key] = res.data[key] || this.form[key]
              })
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
