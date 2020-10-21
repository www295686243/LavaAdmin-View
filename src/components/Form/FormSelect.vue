<template>
  <el-form-item :label="field.label" :prop="field.prop" :placeholder="'请选择' + field.label" :rules="field.rule">
    <el-select
      v-model="innerValue"
      :disabled="field.disabled"
      @change="onChange"
      clearable
      :multiple="field.multiple">
      <el-option :value="v[props.value]" v-for="v in options" :key="v[props.value]" :label="v[props.label]" :disabled="v.disabled"></el-option>
    </el-select>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Inject, Prop } from 'vue-property-decorator'
import { IService } from '@/interface/common'
import { OptionItem } from '@/service/ConstService'

@Component
export default class FormSelect extends Mixins(FormMixins) {
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
    this.innerValue = this.innerValue || ''
    if (this.field.options) {
      this.options = this.field.options
    } else {
      this.options = this.fieldService ? this.fieldService.getOptions(this.field.prop) : this.formService.getOptions(this.field.prop)
    }
  }
}
</script>
