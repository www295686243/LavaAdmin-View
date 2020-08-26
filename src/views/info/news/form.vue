<template>
  <FormRender :data="form" :Service="Service">
    <FormText v-model="form.text" :field="formFields.text"></FormText>
    <FormTextarea v-model="form.textarea" :field="formFields.textarea"></FormTextarea>
    <FormSelect v-model="form.select" :field="formFields.select"></FormSelect>
    <FormRadio v-model="form.radio" :field="formFields.radio"></FormRadio>
    <FormSwitch v-model="form.switch" :field="formFields.switch"></FormSwitch>
    <FormDate v-model="form.datetime" :field="formFields.datetime"></FormDate>
    <FormCheckbox v-model="form.checkbox" :field="formFields.checkbox"></FormCheckbox>
    <FormCounter v-model="form.counter" :field="formFields.counter"></FormCounter>
    <FormCascader v-model="form.cascader" :field="formFields.cascader"></FormCascader>
    <FormEditor v-model="form.editor" :field="formFields.editor"></FormEditor>
    <FormImage v-model="form.image" :field="formFields.image"></FormImage>
    <FormImages v-model="form.images" :field="formFields.images"></FormImages>
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
  private form = {
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
      options: [],
      props: {
        label: 'label',
        value: 'value'
      }
    },
    radio: {
      prop: 'radio',
      label: 'radio',
      options: [],
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
      options: [],
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
