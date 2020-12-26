import axios from '@/plugins/axios'

class AppService {
  menuInfoStat = {
    '/hr/job/info-check': 0,
    '/hr/job/info-provide': 0,
    '/hr/job/info-complaint': 0,
    '/hr/resume/info-check': 0,
    '/hr/resume/info-provide': 0,
    '/hr/resume/info-complaint': 0
  }

  private isLoadingStat = false

  constructor () {
    this.getMenuInfoStat()
  }

  getMenuInfoStat () {
    return Promise.resolve()
      .then(() => {
        if (!this.isLoadingStat) {
          this.isLoadingStat = true
          return axios.get('app/getMenuInfoStat')
            .then((res) => {
              Object.assign(this.menuInfoStat, res.data)
              this.isLoadingStat = false
            })
            .catch(() => {
              this.isLoadingStat = false
            })
        }
      })
  }
}

export default new AppService()
