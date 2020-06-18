<template>
  <PageContainer :onLoad="handleLoad">
    <FormRender :data="data" :onSubmit="handleSubmit">
      <FormText v-model="data.name" :field="formFields.name"></FormText>
      <FormText v-model="data.display_name" :field="formFields.display_name"></FormText>
      <FormCounter v-model="data.value" :field="formFields.value"></FormCounter>
    </FormRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import FormCounter from '@/components/Form/FormCounter.vue'
import FormText from '@/components/Form/FormText.vue'
import { IFormFields } from '@/interface/common'

@Component({
  components: {
    FormCounter,
    FormText
  }
})
export default class PlatformConfigBaseForm extends Vue {
  private data = {
    id: RouterService.query('id') as number,
    name: '',
    display_name: '',
    value: ''
  }

  private formFields: IFormFields = {
    name: {
      prop: 'name',
      label: '标识',
      disabled: this.data.id > 0,
      rule: [
        {
          required: true,
          message: '标识必填',
          trigger: 'blur'
        },
        {
          type: 'string',
          max: 60,
          message: '标识最大60个字符',
          trigger: 'blur'
        }
      ]
    },
    display_name: {
      prop: 'display_name',
      label: '名称',
      rule: [
        {
          required: true,
          message: '名称必填',
          trigger: 'blur'
        },
        {
          type: 'string',
          max: 60,
          message: '名称最大60个字符',
          trigger: 'blur'
        }
      ]
    },
    value: {
      prop: 'value',
      label: '值',
      rule: [
        {
          required: true,
          message: '值必填',
          trigger: 'blur'
        }
      ]
    }
  }

  private handleLoad () {
    return Promise.resolve()
      .then(() => {
        if (this.data.id) {
          return Service.show(this.data.id)
            .then((res) => {
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
}
</script>
