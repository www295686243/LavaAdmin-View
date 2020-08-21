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
          :picker-options="pickerOptions"
          :placeholder="'选择' + (dateType === 'month' ? '月' : '年')">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface ButtonItem {
  text: string;
  active: boolean;
  type: string;
}

@Component
export default class ChartTool extends Vue {
  private buttons: ButtonItem[] = [
    {
      text: '按日',
      active: true,
      type: 'month'
    },
    {
      text: '按月',
      active: false,
      type: 'year'
    }
  ]

  private date = ''
  private dateType = 'month'
  private pickerOptions = {
    disabledDate: (time: Date) => {
      return time.getTime() > (new Date()).getTime()
    }
  }

  private handleChangeButton (v: { text: string; active: boolean; type: string }) {
    this.buttons.forEach((res) => {
      if (res.text === v.text) {
        res.active = true
      } else {
        res.active = false
      }
      this.dateType = v.type
      this.date = ''
    })
  }

  private handleChangeDate (date: Date) {
    const item = this.buttons.find((res) => res.active) as ButtonItem
    const category = []
    if (item.text === '按日') {
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = new Date(y, m, 0)
      const num = d.getDate()
      for (let i = 1; i <= num; i++) {
        category.push(i + '日')
      }
    } else {
      const num = 12
      for (let i = 1; i <= num; i++) {
        category.push(i + '月')
      }
    }
    this.$emit('change', category)
  }

  created () {
    this.handleChangeDate(new Date())
  }
}
</script>
