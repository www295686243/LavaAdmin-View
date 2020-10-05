import WeChatNotifyTemplate from '@/views/other/wechat/notify-template/index.vue'
import WeChatNotifyTemplateForm from '@/views/other/wechat/notify-template/form.vue'
import WeChatNotifyUser from '@/views/other/wechat/notify-user/index.vue'
import WeChatNotifyUserForm from '@/views/other/wechat/notify-user/form.vue'

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
    path: '/other/wechat/notify-user',
    component: WeChatNotifyUser,
    meta: {
      title: '通知用户'
    }
  },
  {
    path: '/other/wechat/notify-user/form',
    component: WeChatNotifyUserForm,
    meta: {
      title: '通知用户'
    }
  }
]
