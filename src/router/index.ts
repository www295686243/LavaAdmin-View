import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/login.vue'
import Main from '@/views/main/main.vue'
import system from './system'
import user from './user'
import info from './info'
import other from './other'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Main,
    children: [
      ...system,
      ...user,
      ...info,
      ...other
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
