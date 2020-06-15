<template>
  <PageContainer :onLoad="handleLoad">
    <FormRender :data="data" :onSubmit="handleSubmit">
      <FormText v-model="data.display_name" :field="formFields.display_name"></FormText>
      <FormText v-model="data.sort" :field="formFields.sort"></FormText>
    </FormRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import FormText from '@/components/Form/FormText.vue'
import { IFormFields } from '@/interface/common'

@Component({
  components: {
    FormText
  }
})
export default class PlatformConfigBaseForm extends Vue {
  private data = {
    id: RouterService.query('id') as number,
    display_name: '',
    config_id: RouterService.query('config_id') as number
  }

  private formFields: IFormFields = {
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
    sort: {
      prop: 'sort',
      label: '排序'
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
