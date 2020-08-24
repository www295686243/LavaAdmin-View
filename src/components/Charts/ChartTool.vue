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
          v-model="search.date"
          :type="search.type"
          :value-format="valueFormat"
          :picker-options="pickerOptions"
          :placeholder="'选择' + (search.type === 'month' ? '月' : '年')">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface ButtonItem {
  text: string;
  active: boolean;
  type: string;
  valueFormat: string;
}

interface Search {
  date: string;
  type: string;
  text: string;
}

@Component
export default class ChartTool extends Vue {
  @Prop()
  search!: Search

  private buttons: ButtonItem[] = [
    {
      text: '按日',
      active: this.search.type === 'month',
      type: 'month',
      valueFormat: 'yyyy-MM'
    },
    {
      text: '按月',
      active: this.search.type === 'year',
      type: 'year',
      valueFormat: 'yyyy'
    }
  ]

  private valueFormat = 'yyyy-MM'
  private pickerOptions = {
    disabledDate: (time: Date) => {
      return time.getTime() > (new Date()).getTime()
    }
  }

  private handleChangeButton (v: ButtonItem) {
    this.buttons.forEach((res) => {
      if (res.text === v.text) {
        res.active = true
      } else {
        res.active = false
      }
      this.valueFormat = v.valueFormat
      this.search.type = v.type
      this.search.date = ''
    })
  }

  private handleChangeDate (date: string) {
    const item = this.buttons.find((res) => res.active) as ButtonItem
    this.search.type = item.type
    this.search.date = date
    this.$emit('change')
  }
}
</script>
