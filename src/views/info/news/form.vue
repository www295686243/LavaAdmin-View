<template>
  <PageContainer :onLoad="handleLoad">
    <FormRender :data="data" :onSubmit="handleSubmit">
      <FormText v-model="data.text" :field="formFields.text"></FormText>
      <FormTextarea v-model="data.textarea" :field="formFields.textarea"></FormTextarea>
      <FormSelect v-model="data.select" :field="formFields.select"></FormSelect>
      <FormRadio v-model="data.radio" :field="formFields.radio"></FormRadio>
      <FormSwitch v-model="data.switch" :field="formFields.switch"></FormSwitch>
      <FormDate v-model="data.datetime" :field="formFields.datetime"></FormDate>
      <FormCheckbox v-model="data.checkbox" :field="formFields.checkbox"></FormCheckbox>
      <FormCounter v-model="data.counter" :field="formFields.counter"></FormCounter>
      <FormCascader v-model="data.cascader" :field="formFields.cascader"></FormCascader>
      <FormEditor v-model="data.editor" :field="formFields.editor"></FormEditor>
      <FormImage v-model="data.image" :field="formFields.image"></FormImage>
      <FormImages v-model="data.images" :field="formFields.images"></FormImages>
    </FormRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import FormText from '@/components/Form/FormText.vue'
import FormTextarea from '@/components/Form/FormTextarea.vue'
import FormSelect from '@/components/Form/FormSelect.vue'
import FormRadio from '@/components/Form/FormRadio.vue'
import FormSwitch from '@/components/Form/FormSwitch.vue'
import FormDate from '@/components/Form/FormDate.vue'
import FormCheckbox from '@/components/Form/FormCheckbox.vue'
import FormCounter from '@/components/Form/FormCounter.vue'
import FormCascader from '@/components/Form/FormCascader.vue'
import FormEditor from '@/components/Form/FormEditor.vue'
import FormImage from '@/components/Form/FormImage.vue'
import FormImages from '@/components/Form/FormImages.vue'
import { IFormFields } from '@/interface/common'

@Component({
  components: {
    FormText,
    FormTextarea,
    FormSelect,
    FormRadio,
    FormSwitch,
    FormDate,
    FormCheckbox,
    FormCounter,
    FormCascader,
    FormEditor,
    FormImage,
    FormImages
  }
})
export default class ViewInfoNewsForm extends Vue {
  private data = {
    id: RouterService.query('id') as number,
    text: '',
    textarea: '',
    select: '',
    radio: '',
    switch: 0,
    datetime: '',
    checkbox: [],
    counter: 0,
    file: '',
    image: '',
    files: [],
    images: [],
    cascader: '',
    editor: ''
  }

  private formFields: IFormFields = {
    text: {
      prop: 'text',
      label: 'text'
    },
    textarea: {
      prop: 'textarea',
      label: 'textarea',
      maxlength: 255
    },
    select: {
      prop: 'select',
      label: 'select',
      options: ConstService.getAppOptions('options')
    },
    radio: {
      prop: 'radio',
      label: 'radio',
      options: ConstService.getAppOptions('options')
    },
    switch: {
      prop: 'switch',
      label: 'switch'
    },
    datetime: {
      prop: 'datetime',
      label: 'datetime'
    },
    checkbox: {
      prop: 'checkbox',
      label: 'checkbox',
      options: ConstService.getAppOptions('options')
    },
    counter: {
      prop: 'counter',
      label: 'counter',
      min: 1,
      max: 10
    },
    cascader: {
      prop: 'cascader',
      label: 'cascader',
      options: ConstService.getCascader(),
      props: {
        value: 'value',
        label: 'label'
      }
    },
    editor: {
      prop: 'editor',
      label: 'editor'
    },
    image: {
      prop: 'image',
      label: 'image'
    },
    images: {
      prop: 'images',
      label: 'images'
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
