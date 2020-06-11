<template>
  <el-form-item class="FormText" :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-input
      :style="{ width: field.width + 'px' }"
      v-model="innerValue"
      :type="autosize ? 'textarea' : 'text'"
      :placeholder="field.placeholder ? field.placeholder : '请输入' + field.label"
      :disabled="field.disabled"
      :show-word-limit="field.maxlength > 0"
      :autosize="autosize ? { minRows: 1.2 } : false"
      :maxlength="field.maxlength">
    </el-input>
    <p class="tips" v-if="field.tips">{{field.tips}}</p>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop } from 'vue-property-decorator'

@Component
export default class FormText extends Mixins(FormMixins) {
  @Prop({ default: false })
  autosize!: boolean
}
</script>

<style lang="scss">
.FormText {
  .el-input__count {
    line-height: 28px;
  }
  .tips {
    color: #666;
    font-size: 12px;
    margin: 0;
    line-height: 1.4;
  }
}
</style>
