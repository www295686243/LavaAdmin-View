<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-date-picker
      v-model="innerValue"
      :type="type"
      :placeholder="'请选择' + field.label"
      :disabled="field.disabled"
      :value-format="valueFormat"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop } from 'vue-property-decorator'

@Component
export default class FormDate extends Mixins(FormMixins) {
  @Prop({ default: 'datetime' })
  type!: string

  private valueFormat = 'yyyy-MM-dd HH:mm:ss'

  created () {
    if (this.type === 'date') {
      this.valueFormat = 'yyyy-MM-dd'
    }
  }
}
</script>
