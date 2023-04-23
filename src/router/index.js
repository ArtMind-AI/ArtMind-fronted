import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {path: '/', component: () => import('../components/users/upload.vue')},
  {path: '/message', component: () => import('../components/users/message.vue')},
  {path: '/collect', component: () => import('../components/users/collect.vue')},
  {path: '/page-tool', component: () => import('../components/users/page-tool.vue')},
  {path: '/society', component: () => import('../components/users/society.vue')},
  {path: '/details', component: () => import('../components/users/details.vue')},
  {path: '/details1', component: () => import('../components/users/details1.vue')},
  {path: '/Header', component: () => import('../components/users/Header.vue')},
  {path: '/details2', component: () => import('../components/users/details2.vue')},
  {path: '/sign-in', component: () => import('../components/users/sign-in.vue')}
]

const router = new Router({
  routes
})
export default router
