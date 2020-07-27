import ParamsConfig from '@/views/params-config/index.vue'
import ParamsConfigForm from '@/views/params-config/form.vue'
import OptionsConfig from '@/views/options-config/index.vue'
import OptionsConfigForm from '@/views/options-config/form.vue'
import OptionsConfigOptions from '@/views/options-config/options/index.vue'
import OptionsConfigOptionsForm from '@/views/options-config/options/form.vue'

import news from '@/views/info/news/index.vue'
import newsForm from '@/views/info/news/form.vue'

export default [
  {
    path: '/info/news/config',
    component: ParamsConfig
  },
  {
    path: '/info/news/config/form',
    component: ParamsConfigForm
  },
  {
    path: '/info/news/options/config',
    component: OptionsConfig
  },
  {
    path: '/info/news/options/config/form',
    component: OptionsConfigForm
  },
  {
    path: '/info/news/options/config/config-options',
    component: OptionsConfigOptions,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/info/news/options/config/config-options/form',
    component: OptionsConfigOptionsForm,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/info/news',
    component: news
  },
  {
    path: '/info/news/form',
    component: newsForm
  }
]
