<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" ref="fieldElement">
    <el-autocomplete
      class="FormAutocomplete"
      :style="{ width: fieldWidth }"
      v-model="innerValue"
      :fetch-suggestions="handleQuerySearch"
      :placeholder="'请输入' + field.label"
      :disabled="field.disabled"
      :show-word-limit="maxLength > 0"
      :maxlength="maxLength"
      @select="handleSelect"
    ></el-autocomplete>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop, Ref } from 'vue-property-decorator'

@Component
export default class FormAutocomplete extends Mixins(FormMixins) {
  @Ref()
  fieldElement!: any

  @Prop({ default: false })
  autosize!: boolean

  private fieldWidth = ''
  private maxLength = null

  private handleQuerySearch (str: string, callback: Function) {
    callback(this.field.options)
  }

  private handleSelect () {
    this.fieldElement.clearValidate()
  }

  created () {
    if (this.field.width) {
      if (this.field.width.toString().includes('%')) {
        this.fieldWidth = this.field.width.toString()
      } else {
        this.fieldWidth = this.field.width + 'px'
      }
    }
    const rule = (this.field.rule || []).find((res) => res.max || res.len)
    if (rule) {
      this.maxLength = rule.max || rule.len
    }
  }
}
</script>

<style lang="scss">
.FormText {
  .el-input__count {
    line-height: 28px;
  }
}
</style>
