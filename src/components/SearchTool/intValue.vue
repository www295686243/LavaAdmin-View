<template>
  <el-form-item label="值" :prop="field.prop" :rules="field.rule">
    <el-input v-model="innerValue" placeholder="请输入值" class="value-input"></el-input>
  </el-form-item>
</template>

<script lang="ts">
import { IFormFieldItem } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import { Component, Mixins } from 'vue-property-decorator'
import SearchMixins from './SearchMixins'

@Component
export default class SearchIntValue extends Mixins(SearchMixins) {
  private field: IFormFieldItem = ValidateService.genRule({
    prop: 'value',
    label: '值',
    rule: [ValidateService.required({ type: 'number' })]
  })
}
</script>
