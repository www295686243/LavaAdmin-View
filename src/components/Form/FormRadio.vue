<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-radio-group v-model="innerValue" @change="onChange">
      <el-radio :label="v[props.value]" v-for="v in options" :key="v[props.value]" :disabled="field.disabled">{{v[props.label]}}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Inject, Prop } from 'vue-property-decorator'
import { IService } from '@/interface/common'
import { OptionItem } from '@/service/ConstService'

@Component
export default class FormRadio extends Mixins(FormMixins) {
  @Inject('formService')
  formService!: IService

  @Prop()
  fieldService!: IService

  private props = {
    value: 'value',
    label: 'display_name'
  }

  private onChange (value: number) {
    this.$emit('change', value)
  }

  private options = [] as OptionItem[]

  created () {
    Object.assign(this.props, this.field.props)
    if (this.field.options) {
      this.options = this.field.options
    } else {
      this.options = this.fieldService ? this.fieldService.getOptions(this.field.prop) : this.formService.getOptions(this.field.prop)
    }
  }
}
</script>
