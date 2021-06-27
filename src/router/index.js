import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: () => import('@/views/First.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/subscription',
    component: () => import('@/views/Subscription.vue')
  },
  {
    path: '/checkout',
    component: () => import('@/views/Checkout.vue')
  },
  {
    path: '/article/:id',
    component: () => import('@/views/Article.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/News.vue')
      },
      {
        path: 'contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
