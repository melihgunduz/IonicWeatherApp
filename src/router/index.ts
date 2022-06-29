import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsVue from '../views/TabsVue.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/tabs/',
    component: TabsVue,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Vue.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Vue.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
