<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-input
      type="textarea"
      v-model="innerValue"
      :autosize="{minRows: 5,maxRows: 10}"
      :placeholder="'请输入' + field.label"
      :disabled="field.disabled"
      :maxlength="maxLength"
      show-word-limit
      ></el-input>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormTextarea extends Mixins(FormMixins) {
  private maxLength = null

  created () {
    const rule = (this.field.rule || []).find((res) => res.max || res.len)
    if (rule) {
      this.maxLength = rule.max || rule.len
    }
  }
}
</script>
