import axios from '@/plugins/axios'

class ChartService {
  createTodayData () {
    return axios.get('chart/createTodayData')
  }

  getCurrentMonthData (date: string, code: string) {
    return axios.get('chart/getCurrentMonthData', { date, code })
  }

  getCurrentYearData (date: string, code: string) {
    return axios.get('chart/getCurrentYearData', { date, code })
  }
}

export default new ChartService()
