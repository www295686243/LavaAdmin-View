<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" ref="formItemElement">
    <el-cascader
      v-model="innerValue"
      :clearable="true"
      :options="field.options"
      :props="props"
      :filterable="true"
      :disabled="field.disabled"></el-cascader>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop, Ref } from 'vue-property-decorator'
import ConstService from '@/service/ConstService'

@Component
export default class FormCascader extends Mixins(FormMixins) {
  @Ref()
  formItemElement!: { clearValidate: Function }

  @Prop()
  type!: string

  private props = {
    expandTrigger: 'hover',
    label: 'display_name',
    value: 'id',
    emitPath: false
  }

  private validateCityRequired (rule: any, value: number, callback: Function) {
    if (this.innerValue > 0) {
      callback()
    } else {
      const text = `请选择${this.field.label}`
      callback(text)
    }
  }

  created () {
    if (this.type === 'city') {
      this.field.props = {
        label: 'name',
        value: 'id'
      }
      this.field.options = ConstService.getAreaOptions()
      const isRequired = (this.field.rule || []).find((res) => res.required)
      if (isRequired) {
        isRequired.type = 'number'
        this.field.rule = (this.field.rule || []).concat([{ validator: this.validateCityRequired }])
      }
    }
    this.innerValue = this.innerValue ? Number(this.innerValue) : 0
    Object.assign(this.props, this.field.props)
  }
}
</script>
