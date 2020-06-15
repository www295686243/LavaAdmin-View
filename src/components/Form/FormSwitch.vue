<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-switch v-model="innerValue" :disabled="field.disabled" :active-value="1" :inactive-value="0" active-text="开启" inactive-text="关闭"></el-switch>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class FormSwitch extends Mixins(FormMixins) {
}
</script>
