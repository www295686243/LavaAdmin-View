<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormMultipleCascader">
    <el-cascader
      v-model="innerValue"
      :clearable="true"
      :options="field.options"
      :props="props"
      collapse-tags
      :filterable="true"
      :disabled="field.disabled"></el-cascader>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Prop } from 'vue-property-decorator'
import cache from '@/plugins/cache'

@Component
export default class FormMultipleCascader extends Mixins(FormMixins) {
  @Prop()
  type!: string

  private paths: number[][]|string[][] = []

  private props = {
    expandTrigger: 'hover',
    label: 'display_name',
    value: 'id',
    multiple: true,
    emitPath: false
  }

  private setInnerValue () {
    this.innerValue = (this.value || []).map((res: number | { id: number }) => {
      if (typeof res === 'object' && res.id) {
        return res.id
      } else {
        return res
      }
    })
  }

  created () {
    this.setInnerValue()
    if (this.type === 'industry') {
      this.field.options = JSON.parse(JSON.stringify(cache.config.get('industry') || []))
    }
    console.log(this.field.options)
    Object.assign(this.props, this.field.props)
  }
}
</script>

<style lang="scss">
.FormMultipleCascader {
  .el-cascader {
    width: 280px;
  }
}
</style>
