<template>
  <el-form-item :label="field.label" :prop="field.prop" :placeholder="'请选择' + field.label" :rules="field.rule">
    <el-select v-model="innerValue" :disabled="field.disabled" @change="onChange" clearable :multiple="field.multiple">
      <el-option :value="v[props.value]" v-for="v in options" :key="v[props.value]" :label="v[props.label]"></el-option>
    </el-select>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Inject } from 'vue-property-decorator'
import { IService, IOptions } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class FormSelect extends Mixins(FormMixins) {
  @Inject('formService')
  formService!: IService

  private props = {
    value: 'id',
    label: 'display_name'
  }

  private onChange (value: number) {
    this.$emit('change', value)
  }

  private options = [] as IOptions[]

  created () {
    Object.assign(this.props, this.field.props)
    this.innerValue = this.innerValue || ''
    if (this.field.options) {
      this.options = this.field.options
    } else {
      this.options = ConstService.getOptions(this.formService.getModelName() + ':' + this.field.prop)
    }
  }
}
</script>
