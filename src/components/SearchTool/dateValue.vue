<template>
  <el-form-item label="值" :prop="field.prop" :rules="field.rule">
    <el-date-picker
      @change="handleChangeDateRange"
      v-if="operator === 'between'"
      v-model="innerValue"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
      align="right">
    </el-date-picker>
    <el-date-picker
      @change="handleChangeDate"
      v-else
      v-model="innerValue"
      :type="type"
      value-format="yyyy-MM-dd"
      placeholder="请选择日期">
    </el-date-picker>
  </el-form-item>
</template>

<script lang="ts">
import { IFormFieldItem } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import { Component, Mixins } from 'vue-property-decorator'
import SearchMixins from './SearchMixins'

@Component
export default class SearchDateValue extends Mixins(SearchMixins) {
  private field: IFormFieldItem = ValidateService.genRule({
    prop: 'value',
    label: '值',
    rule: [ValidateService.required({ trigger: 'change' })]
  })

  private handleChangeDateRange (date: string[]) {
    if (date) {
      this.innerValue = [date[0] + ' 00:00:00', date[1] + ' 23:59:59']
    } else {
      this.innerValue = ''
    }
  }

  private handleChangeDate (date: string) {
    if (this.operator === '>') {
      this.innerValue = date + ' 23:59:59'
    } else if (this.operator === '<') {
      this.innerValue = date + ' 00:00:00'
    }
  }
}
</script>
