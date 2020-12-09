import job from '@/views/hr/hr-job/index.vue'
import jobForm from '@/views/hr/hr-job/form.vue'
import resume from '@/views/hr/hr-resume/index.vue'
import resumeForm from '@/views/hr/hr-resume/form.vue'
import infoCheck from '@/views/info/info-check/index.vue'
import infoCheckForm from '@/views/info/info-check/form.vue'
import infoComplaint from '@/views/info/info-complaint/index.vue'
import infoComplaintForm from '@/views/info/info-complaint/form.vue'
import infoProvide from '@/views/info/info-provide/index.vue'
import infoProvideForm from '@/views/info/info-provide/form.vue'
import infoDelivery from '@/views/info/info-delivery/index.vue'

export default [
  // 职位
  {
    path: '/hr/job/info-check',
    component: infoCheck
  },
  {
    path: '/hr/job/info-check/form',
    component: infoCheckForm
  },
  {
    path: '/hr/job/list',
    component: job
  },
  {
    path: '/hr/job/list/form',
    component: jobForm
  },
  {
    path: '/hr/job/info-provide',
    component: infoProvide
  },
  {
    path: '/hr/job/info-provide/form',
    component: infoProvideForm
  },
  {
    path: '/hr/job/info-complaint',
    component: infoComplaint
  },
  {
    path: '/hr/job/info-complaint/form',
    component: infoComplaintForm
  },
  {
    path: '/hr/job/info-delivery',
    component: infoDelivery
  },
  // 简历
  {
    path: '/hr/resume/info-check',
    component: infoCheck
  },
  {
    path: '/hr/resume/info-check/form',
    component: infoCheckForm
  },
  {
    path: '/hr/resume/list',
    component: resume
  },
  {
    path: '/hr/resume/list/form',
    component: resumeForm
  },
  {
    path: '/hr/resume/info-provide',
    component: infoProvide
  },
  {
    path: '/hr/resume/info-provide/form',
    component: infoProvideForm
  },
  {
    path: '/hr/resume/info-complaint',
    component: infoComplaint
  },
  {
    path: '/hr/resume/info-complaint/form',
    component: infoComplaintForm
  },
  {
    path: '/hr/resume/info-delivery',
    component: infoDelivery
  }
]
