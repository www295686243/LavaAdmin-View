import WeChatNotifyTemplate from '@/views/other/wechat/notify-template/index.vue'
import WeChatNotifyTemplateForm from '@/views/other/wechat/notify-template/form.vue'
import OptionsConfig from '@/views/options-config/index.vue'
import OptionsConfigForm from '@/views/options-config/form.vue'
import OptionsConfigOptions from '@/views/options-config/options/index.vue'
import OptionsConfigOptionsForm from '@/views/options-config/options/form.vue'

export default [
  {
    path: '/other/wechat/notify-template',
    component: WeChatNotifyTemplate
  },
  {
    path: '/other/wechat/notify-template/form',
    component: WeChatNotifyTemplateForm
  },
  {
    path: '/other/wechat/options/config',
    component: OptionsConfig
  },
  {
    path: '/other/wechat/options/config/form',
    component: OptionsConfigForm
  },
  {
    path: '/other/wechat/options/config/config-options',
    component: OptionsConfigOptions,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/other/wechat/options/config/config-options/form',
    component: OptionsConfigOptionsForm,
    meta: {
      title: '选项配置'
    }
  }
]
