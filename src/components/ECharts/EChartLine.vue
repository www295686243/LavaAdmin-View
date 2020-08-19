<template>
  <div class="EChartLine"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import echarts from '@/plugins/echarts'

@Component
export default class EChartLine extends Vue {
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
      // 图表位置
      grid: {
        top: '10%',
        right: '2%',
        bottom: '5%',
        left: '1%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: [{
        type: 'value',
        name: '',
        min: 0,
        max: 1000,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f4f4f4'
          }
        }
      }],
      series: [{
        name: '注册数',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#0092f6',
            lineStyle: {
              color: '#0092f6',
              width: 2
            }
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(34,150,243, 0.3)' // 折线底下区域渐变色
            }, {
              offset: 0.8,
              color: 'rgba(34,150,243, 0.1)' // 折线底下区域渐变色
            }], false)
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
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
.EChartLine {
  width: 100%;
  height: 400px;
}
</style>
