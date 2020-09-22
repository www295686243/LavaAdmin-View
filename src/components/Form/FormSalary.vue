<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormSalary" ref="formItemElement">
    <el-checkbox-group v-model="innerValue"></el-checkbox-group>
    <el-input v-model="innerMinValue" placeholder="最小值" :disabled="innerIsNegotiable === 1 || field.disabled"></el-input>
    <span class="spacer">-</span>
    <el-input v-model="innerMaxValue" placeholder="最大值" :disabled="innerIsNegotiable === 1 || field.disabled"></el-input>
    <el-checkbox :true-label="1" :false-label="0" v-model="innerIsNegotiable" :disabled="field.disabled">面议</el-checkbox>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop, Watch, Ref } from 'vue-property-decorator'

interface InnerRule {
  required?: boolean;
  validator?: Function;
  message?: string;
}

@Component
export default class FormSalary extends Mixins(FormMixins) {
  @Ref()
  formItemElement!: { clearValidate: Function }

  @Prop()
  minValue!: number

  @Prop()
  maxValue!: number

  @Prop()
  isNegotiable!: number

  private innerMinValue = this.minValue
  private innerMaxValue = this.maxValue
  private innerIsNegotiable = this.isNegotiable
  private innerRules: InnerRule[] = [{ validator: this.validateSalary }]

  @Watch('innerMinValue')
  onInnerMinValue (val: number) {
    this.$emit('update:minValue', val)
    this.formItemElement.clearValidate()
  }

  @Watch('innerMaxValue')
  onInnerMaxValue (val: number) {
    this.$emit('update:maxValue', val)
    this.formItemElement.clearValidate()
  }

  @Watch('minValue')
  onMinValue (val: number) {
    this.innerMinValue = val
    this.formItemElement.clearValidate()
  }

  @Watch('maxValue')
  onMaxValue (val: number) {
    this.innerMaxValue = val
    this.formItemElement.clearValidate()
  }

  @Watch('innerIsNegotiable')
  onInnerIsNegotiable (val: number) {
    this.$emit('update:isNegotiable', val)
    this.formItemElement.clearValidate()
  }

  @Watch('isNegotiable')
  onIsNegotiable (val: number) {
    this.innerIsNegotiable = val
    this.formItemElement.clearValidate()
  }

  private validateSalary (rule: any, value: number, callback: Function) {
    if (this.innerMinValue || this.innerMaxValue) {
      if (this.innerMinValue > this.innerMaxValue) {
        const text = `请正确输入${this.field.label}`
        callback(text)
      }
    }
    callback()
  }

  private validateSalaryRequired (rule: any, value: number, callback: Function) {
    if (this.innerIsNegotiable > 0 || (this.innerMinValue >= 0 && this.innerMaxValue > 0)) {
      callback()
    } else {
      const text = `请输入${this.field.label}`
      callback(text)
    }
  }

  created () {
    const isRequired = (this.field.rule || []).find((res) => res.required)
    if (isRequired) {
      this.innerRules = this.innerRules.concat([{ required: true, message: `请输入${this.field.label}` }]).concat([{ validator: this.validateSalaryRequired }])
    }
    this.field.rule = this.innerRules
  }
}
</script>

<style lang="scss">
.FormSalary {
  & > .el-form-item__content {
    display: flex;
    align-items: center;
  }
  .spacer {
    display: inline-block;
    padding: 0 8px;
  }
  .el-input {
    width: 150px;
  }
  .el-checkbox {
    margin-left: 15px;
  }
}
</style>
