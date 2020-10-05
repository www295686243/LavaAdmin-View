<template>
  <el-form-item class="FormInput" :label="field.label" :prop="field.prop" :label-width="labelWidth">
    <el-input
      :style="{ width: field.width + 'px' }"
      :value="value"
      readonly>
    </el-input>
  </el-form-item>
</template>

<script lang="ts">
import { IFormFieldItem } from '@/interface/common'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormInput extends Vue {
  @Prop()
  value!: string

  @Prop()
  field!: IFormFieldItem

  @Prop()
  labelWidth!: string
}
</script>

<style lang="scss">
.FormInput {
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
