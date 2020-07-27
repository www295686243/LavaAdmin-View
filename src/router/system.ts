import ParamsConfig from '@/views/params-config/index.vue'
import ParamsConfigForm from '@/views/params-config/form.vue'

import adminLog from '@/views/system/admin-log/index.vue'

import version from '@/views/system/version/index.vue'
import versionForm from '@/views/system/version/form.vue'

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
  }
]
