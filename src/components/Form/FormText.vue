<template>
  <el-form-item class="FormText" :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-input
      :style="{ width: field.width + 'px' }"
      v-model="innerValue"
      :type="autosize ? 'textarea' : 'text'"
      :placeholder="field.placeholder ? field.placeholder : '请输入' + field.label"
      :disabled="field.disabled"
      :readonly="field.readonly"
      :show-word-limit="maxLength > 0"
      :autosize="autosize ? { minRows: 1.2 } : false"
      :maxlength="maxLength"
      clearable>
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

  private maxLength = null

  created () {
    const rule = (this.field.rule || []).find((res) => res.max || res.len)
    if (rule) {
      this.maxLength = rule.max || rule.len
    }
    this.innerValue = typeof this.innerValue === 'string' ? this.innerValue : JSON.stringify(this.innerValue)
  }
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
