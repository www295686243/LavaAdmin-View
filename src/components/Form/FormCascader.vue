<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-cascader
      v-model="innerValue"
      :clearable="true"
      :options="field.options"
      :props="props"
      @change="onChange"
      :filterable="field.filterable"
      :disabled="field.disabled"></el-cascader>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormCascader extends Mixins(FormMixins) {
  private props = {
    expandTrigger: 'hover',
    label: 'display_name',
    value: 'id'
  }

  private onChange (values: number[]) {
    if (values.length === 0) {
      this.innerValue = 0
    } else {
      this.innerValue = values[values.length - 1]
    }
  }

  created () {
    Object.assign(this.props, this.field.props)
  }
}
</script>
