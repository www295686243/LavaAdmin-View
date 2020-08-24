import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import echarts from '@/plugins/echarts'

@Component
export default class ChartMixins extends Vue {
  @Prop()
  value!: any

  @Prop()
  title!: string

  @Prop()
  category!: string[]

  @Watch('category')
  onCategory () {
    this.chart.setOption(this.getOptions())
  }

  @Watch('value')
  onValue (val: any) {
    this.innerValue = val
  }

  public innerValue: any = this.value
  public chart = null as any

  public getOptions () {
    //
  }

  mounted () {
    const el = this.$el.querySelector('.report')
    this.chart = echarts.init(el)
    this.chart.setOption(this.getOptions())
  }
}
