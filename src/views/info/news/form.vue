<template>
  <FormRender :data="data" :Service="Service">
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import FormEditor from '@/components/Form/FormEditor.vue'
import FormImage from '@/components/Form/FormImage.vue'
import FormImages from '@/components/Form/FormImages.vue'
import { IFormFields } from '@/interface/common'
import ConstService from '@/service/ConstService'
import ValidateService from '@/service/ValidateService'

@Component({
  components: {
    FormEditor,
    FormImage,
    FormImages
  }
})
export default class ViewInfoNewsForm extends Vue {
  private Service = Service
  private data = {
    id: RouterService.query('id'),
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
    editor: '',
    marking: RouterService.query('marking')
  }

  private formFields: IFormFields = {
    text: {
      prop: 'text',
      label: 'text'
    },
    textarea: ValidateService.genRule({
      prop: 'textarea',
      label: 'textarea',
      rule: [ValidateService.max(255)]
    }),
    select: {
      prop: 'select',
      label: 'select',
      options: ConstService.getOptions(),
      props: {
        label: 'label',
        value: 'value'
      }
    },
    radio: {
      prop: 'radio',
      label: 'radio',
      options: ConstService.getOptions(),
      props: {
        label: 'label',
        value: 'value'
      }
    },
    switch: {
      prop: 'switch',
      label: 'switch',
      options: [{ label: '开', value: 1 }, { label: '关', value: 0 }],
      props: {
        label: 'label',
        value: 'value'
      }
    },
    datetime: {
      prop: 'datetime',
      label: 'datetime'
    },
    checkbox: {
      prop: 'checkbox',
      label: 'checkbox',
      options: ConstService.getOptions(),
      props: {
        label: 'label',
        value: 'value'
      }
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
      options: [],
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
}
</script>
