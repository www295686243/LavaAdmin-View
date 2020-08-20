<template>
  <div class="ChartTool">
    <el-form :inline="true">
      <el-form-item>
        <el-button-group>
          <el-button
            @click="handleChangeButton(v)"
            :type="v.active ? 'primary' : 'default'"
            size="small"
            v-for="(v, index) in buttons"
            :key="index">
            {{v.text}}
          </el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          size="small"
          @change="handleChangeDate"
          v-model="date"
          :type="dateType"
          :value-format="valueFormat"
          :placeholder="'选择' + (dateType === 'month' ? '月' : '年')">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChartTool extends Vue {
  private buttons = [
    {
      text: '按日',
      active: true,
      type: 'month',
      valueFormat: 'yyyy-MM'
    },
    {
      text: '按月',
      active: false,
      type: 'year',
      valueFormat: 'yyyy'
    }
  ]

  private date = ''
  private dateType = 'month'
  private valueFormat = 'yyyy-MM'

  private handleChangeButton (v: { text: string; active: boolean; type: string; valueFormat: string }) {
    this.buttons.forEach((res) => {
      if (res.text === v.text) {
        res.active = true
      } else {
        res.active = false
      }
      this.dateType = v.type
      this.valueFormat = v.valueFormat
      this.date = ''
    })
  }

  private handleChangeDate (value: string) {
    this.date = value
    this.$emit('change', this.date)
  }
}
</script>
