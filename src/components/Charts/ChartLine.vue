<template>
  <div class="ChartLine">
    <div class="report"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import echarts from '@/plugins/echarts'

const xData = (function () {
  const arr = []
  for (let i = 1; i <= 31; i++) {
    arr.push('12月' + i + '日')
  }
  return arr
})()

@Component
export default class ChartLine extends Vue {
  private getOptions () {
    return {
      title: {
        text: '注册量走势图'
      },
      // 提示框
      tooltip: {
        show: true,
        trigger: 'item'
      },
      grid: {
        top: 80,
        right: 30,
        bottom: 40,
        left: 0,
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        splitLine: {
          show: false
        },
        data: xData
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false
        }
      }],
      dataZoom: [{
        show: false,
        start: 65,
        end: 100
      },
      {
        type: 'inside'
      }],
      series: [{
        name: '注册数',
        type: 'line',
        smooth: true, // 是否平滑
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#48B3FF',
            lineStyle: {
              color: '#48B3FF',
              width: 2
            }
          }
        },
        markPoint: {
          data: [
            { type: 'min', name: '最小值' },
            { type: 'max', name: '最大值' }
          ]
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(195,230,255,1)'
            },
            {
              offset: 1,
              color: 'rgba(195,230,255,0.1)'
            }], false),
            shadowColor: 'rgba(195,230,255,0.1)',
            shadowBlur: 20
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
      }]
    }
  }

  mounted () {
    const el = this.$el.querySelector('.report')
    const chart = echarts.init(el)
    chart.setOption(this.getOptions())
  }
}
</script>

<style lang="scss">
.ChartLine {
  .report {
    width: 100%;
    height: 400px;
  }
}
</style>
