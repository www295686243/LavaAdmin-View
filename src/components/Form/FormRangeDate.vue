<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <el-date-picker
      v-model="innerValue"
      :type="type"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :disabled="field.disabled"
      :value-format="valueFormat">
    </el-date-picker>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'

@Component
export default class FormRangeDate extends Mixins(FormMixins) {
  @Prop({ default: 'monthrange' })
  type!: string

  @Prop()
  minValue!: string

  @Prop()
  maxValue!: string

  private valueFormat = 'yyyy-MM-dd'

  @Watch('innerValue')
  onInnerValue (val: string[]) {
    val = val || []
    const [minValue, maxValue] = val
    this.$emit('update:minValue', minValue)
    this.$emit('update:maxValue', maxValue)
    this.$emit('input', val)
  }

  created () {
    if (this.type === 'monthrange') {
      this.valueFormat = 'yyyy-MM'
    }
    this.innerValue = (this.minValue && this.maxValue) ? [this.minValue, this.maxValue] : []
  }
}
</script>
