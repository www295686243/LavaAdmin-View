<template>
  <el-form-item :label="field.label" :prop="field.prop" :placeholder="'请选择' + field.label" :rules="field.rule">
    <el-select v-model="innerValue" :disabled="field.disabled" @change="onChange" clearable :multiple="field.multiple">
      <el-option :value="v[props.value]" v-for="v in field.options" :key="v[props.value]" :label="v[props.label]"></el-option>
    </el-select>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormSelect extends Mixins(FormMixins) {
  private props = {
    value: 'id',
    label: 'display_name'
  }

  private onChange (value: number) {
    this.$emit('change', value)
  }

  created () {
    Object.assign(this.props, this.field.props)
    this.innerValue = this.innerValue || ''
  }
}
</script>
