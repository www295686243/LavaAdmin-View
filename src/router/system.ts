import ParamsConfig from '@/views/params-config/index.vue'
import ParamsConfigForm from '@/views/params-config/form.vue'
import OptionsConfig from '@/views/options-config/index.vue'
import OptionsConfigForm from '@/views/options-config/form.vue'
import OptionsConfigOptions from '@/views/options-config/options/index.vue'
import OptionsConfigOptionsForm from '@/views/options-config/options/form.vue'

import adminLog from '@/views/system/admin-log/index.vue'

import version from '@/views/system/version/index.vue'
import versionForm from '@/views/system/version/form.vue'

import industry from '@/views/system/industry/index.vue'
import industryForm from '@/views/system/industry/form.vue'

export default [
  {
    path: '/system/config',
    component: ParamsConfig
  },
  {
    path: '/system/config/form',
    component: ParamsConfigForm
  },
  {
    path: '/system/options/config',
    component: OptionsConfig
  },
  {
    path: '/system/options/config/form',
    component: OptionsConfigForm
  },
  {
    path: '/system/options/config/config-options',
    component: OptionsConfigOptions,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/system/options/config/config-options/form',
    component: OptionsConfigOptionsForm,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/system/admin-log',
    component: adminLog
  },
  {
    path: '/system/version',
    component: version
  },
  {
    path: '/system/version/form',
    component: versionForm
  },
  {
    path: '/system/industry',
    component: industry
  },
  {
    path: '/system/industry/form',
    component: industryForm
  }
]
