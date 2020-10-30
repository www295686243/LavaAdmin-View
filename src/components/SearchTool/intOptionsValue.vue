<template>
  <el-form-item label="值" :prop="field.prop" :rules="field.rule">
    <el-select
      v-model="innerValue"
      multiple
      placeholder="请选择">
      <el-option
        v-for="(v, key) in options"
        :key="key"
        :label="v[optionsProps.label]"
        :value="v[optionsProps.value]">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script lang="ts">
import { IFormFieldItem } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import { Component, Mixins, Prop } from 'vue-property-decorator'
import SearchMixins from './SearchMixins'

@Component
export default class SearchIntOptionsValue extends Mixins(SearchMixins) {
  @Prop()
  options!: any[]

  @Prop()
  optionsProps!: { label: string; value: string }

  private field: IFormFieldItem = ValidateService.genRule({
    prop: 'value',
    label: '值',
    rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
  })
}
</script>
