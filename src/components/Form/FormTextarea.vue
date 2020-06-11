<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-input
      type="textarea"
      v-model="data"
      :autosize="{minRows: 5,maxRows: 10}"
      :placeholder="'请输入' + field.label"
      :disabled="field.disabled"
      :maxlength="field.maxlength"
      show-word-limit
      ></el-input>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormTextarea extends Mixins(FormMixins) {
}
</script>
