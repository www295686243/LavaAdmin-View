import BaseAbstract from '@/abstract/BaseAbstract'
import axios from '@/plugins/axios'
import ConstService from '@/service/ConstService'
import RouterService from '@/service/RouterService'

interface DataItem {
  send_info_type: string;
  receive_info_type: string;
  type: {
    text: string;
    color: string;
  };
}

export default class Service extends BaseAbstract {
  name = 'InfoDelivery'
  path = ''
  controllerName = ''

  constructor () {
    super()
    this.controllerName = this.getHrInterfaceService(this.name)
    this.path = this.getHrInterfacePath('info_delivery')
  }

  index (params: { page: number }) {
    return axios.get(this.path, {
      ...params,
      _model: RouterService.query('_model')
    })
      .then((res) => {
        const models = ConstService.getModelNames()
        res.data.data = res.data.data.map((item: DataItem) => {
          const sendInfoItem = models.find((row) => row.value === item.send_info_type)
          const send_type = sendInfoItem?.display_name as string
          const receive_type = models.find((row) => row.value === item.receive_info_type)?.display_name as string
          item.type = {
            text: `${send_type}投递给${receive_type}`,
            color: sendInfoItem?.color as string
          }
          return item
        })
        return res
      })
  }
}
