<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-checkbox-group v-model="innerValue">
      <el-checkbox :label="v[props.value]" v-for="v in field.options" :key="v[props.value]" :disabled="field.disabled">{{v[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormCheckbox extends Mixins(FormMixins) {
  private props = {
    value: 'id',
    label: 'display_name'
  }

  created () {
    this.innerValue = this.innerValue || []
    Object.assign(this.props, this.field.props)
  }
}
</script>
