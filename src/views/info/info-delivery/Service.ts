import axios from '@/plugins/axios'
import BaseModalService from '@/service/BaseModalService'
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

class Service extends BaseModalService {
  modelName = 'Info/InfoDelivery'
  index (params: { page: number }) {
    return axios.get('info_delivery', {
      ...params,
      _model: RouterService.query('_model')
    })
      .then((res) => {
        const models = ConstService.getModelNames()
        res.data.data = res.data.data.map((item: DataItem) => {
          const sendInfoItem = models.find((row) => row.id === item.send_info_type)
          const send_type = sendInfoItem?.display_name as string
          const receive_type = models.find((row) => row.id === item.receive_info_type)?.display_name as string
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

export default new Service()
