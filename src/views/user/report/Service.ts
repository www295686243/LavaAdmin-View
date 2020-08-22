import axios from '@/plugins/axios'

class Service {
  index (params: { page: number }) {
    return axios.get('notify', params)
  }

  createTodayData () {
    return axios.get('chart/createTodayData')
  }

  getCurrentMonthData (date: string) {
    return axios.get('chart/getCurrentMonthData', { date })
  }

  getCurrentYearData (date: string) {
    return axios.get('chart/getCurrentYearData', { date })
  }
}

export default new Service()
