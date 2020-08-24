<template>
  <div class="ChartLine">
    <div class="report"></div>
  </div>
</template>

<script lang="ts">
import ChartMixins from './ChartMixins'
import { Component, Mixins } from 'vue-property-decorator'
import echarts from '@/plugins/echarts'

@Component
export default class ChartLine extends Mixins(ChartMixins) {
  private startDataZoom = 0

  getOptions () {
    const scale = 8 / this.category.length
    this.startDataZoom = scale >= 1 ? 0 : Math.floor(scale * 100)

    return {
      title: {
        text: this.title
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
        data: this.category
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false
        },
        minInterval: 1
      }],
      dataZoom: [{
        show: false,
        start: this.startDataZoom,
        end: 100
      },
      {
        type: 'inside'
      }],
      series: [{
        name: this.title,
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
        data: this.innerValue
      }]
    }
  }
}
</script>

<style lang="scss">
.ChartLine {
  width: 100%;
  height: 100%;
  .report {
    width: 100%;
    height: 100%;
  }
}
</style>
