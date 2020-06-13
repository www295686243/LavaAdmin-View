<template>
  <PageContainer :onLoad="handleLoad">
    <FormRender :data="data" :onSubmit="handleSubmit">
      <FormSelect v-model="data.role_names" :field="formFields.role_names"></FormSelect>
      <FormText v-model="data.username" :field="formFields.username"></FormText>
      <FormText v-model="data.password" :field="formFields.password"></FormText>
      <FormText v-model="data.nickname" :field="formFields.nickname"></FormText>
      <FormText v-model="data.phone" :field="formFields.phone"></FormText>
    </FormRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import FormText from '@/components/Form/FormText.vue'
import FormSelect from '@/components/Form/FormSelect.vue'
import { IFormFields } from '@/interface/common'
import PositionService from '../position/Service'

@Component({
  components: {
    FormText,
    FormSelect
  }
})
export default class ViewUserAdminEmployeeForm extends Vue {
  private data = {
    id: RouterService.query('id') as number,
    role_names: [],
    username: '',
    password: '',
    nickname: '',
    phone: ''
  }

  private formFields: IFormFields = {
    role_names: {
      prop: 'role_names',
      label: '角色',
      options: [],
      multiple: true,
      props: {
        value: 'name',
        label: 'display_name'
      },
      rule: [
        {
          required: true,
          message: '请设置角色',
          trigger: 'change'
        }
      ]
    },
    username: {
      prop: 'username',
      label: '用户名',
      rule: [
        {
          required: true,
          message: '用户名必填',
          trigger: 'blur'
        },
        {
          type: 'string',
          min: 6,
          max: 20,
          message: '用户名必须为6~20个字符之间',
          trigger: 'blur'
        }
      ]
    },
    password: {
      prop: 'password',
      label: '密码',
      rule: [
        {
          required: true,
          message: '密码必填',
          trigger: 'blur'
        },
        {
          type: 'string',
          min: 6,
          max: 20,
          message: '密码必须为6~20个字符之间',
          trigger: 'blur'
        }
      ]
    },
    nickname: {
      prop: 'nickname',
      label: '昵称',
      rule: [
        {
          type: 'string',
          min: 2,
          max: 20,
          message: '昵称必须为2~20个字符之间',
          trigger: 'blur'
        }
      ]
    },
    phone: {
      prop: 'phone',
      label: '手机号',
      rule: [
        {
          pattern: /^1\d{10}$/,
          message: '请输入11位手机号',
          trigger: 'blur'
        }
      ]
    }
  }

  private handleLoad () {
    return this.fetchRoleList()
      .then(() => {
        if (this.data.id) {
          this.formFields.password.rule = [
            {
              type: 'string',
              min: 6,
              max: 20,
              message: '密码必须为6~20个字符之间',
              trigger: 'blur'
            }
          ]
          return Service.show(this.data.id)
            .then((res) => {
              res.data.role_names = res.data.roles.map((res: { name: string }) => res.name)
              Object.assign(this.data, res.data)
            })
        }
      })
  }

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        if (this.data.id) {
          return Service.update(this.data)
        } else {
          return Service.store(this.data)
        }
      })
      .then(() => {
        RouterService.go()
      })
  }

  private fetchRoleList () {
    return PositionService.index({
      guard_name: 'admin'
    })
      .then((res) => {
        this.formFields.role_names.options = res.data
      })
  }
}
</script>
