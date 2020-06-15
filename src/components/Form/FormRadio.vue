<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-radio-group v-model="innerValue">
      <el-radio :label="v[props.value]" v-for="v in field.options" :key="v[props.value]" :disabled="field.disabled">{{v[props.label]}}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormRadio extends Mixins(FormMixins) {
  private props = {
    value: 'id',
    label: 'display_name'
  }

  created () {
    Object.assign(this.props, this.field.props)
  }
}
</script>
