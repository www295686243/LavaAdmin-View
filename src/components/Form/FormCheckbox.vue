<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-checkbox-group v-model="innerValue">
      <el-checkbox :label="v[props.value]" v-for="v in options" :key="v[props.value]" :disabled="field.disabled">{{v[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Inject } from 'vue-property-decorator'
import { IService, IOptions } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class FormCheckbox extends Mixins(FormMixins) {
  @Inject('formService')
  formService!: IService

  private props = {
    value: 'id',
    label: 'display_name'
  }

  private options = [] as IOptions[]

  created () {
    this.innerValue = this.innerValue || []
    Object.assign(this.props, this.field.props)
    if (this.field.options) {
      this.options = this.field.options
    } else {
      this.options = ConstService.getOptions(this.formService.getModelName() + ':' + this.field.prop)
    }
  }
}
</script>
