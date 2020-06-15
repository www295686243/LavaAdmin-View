<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-input-number
      v-model="innerValue"
      :min="field.min"
      :max="field.max"
      :label="'请输入' + field.label"
      :disabled="field.disabled">
    </el-input-number>
    <span style="color: #666;" v-if="field.tips"> {{field.tips}}</span>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormCounter extends Mixins(FormMixins) {
}
</script>
