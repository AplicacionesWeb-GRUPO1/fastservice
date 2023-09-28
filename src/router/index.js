import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ExpertHomeComponent from "@/expert/pages/expertHome.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home-layout',
      children: [
        {
          path: 'about',
          name: 'about',
          component: AboutView,
        },
      ],
    },
    {
      path: '/expertHome',
      name: 'Expert-layout',
      children: [
        {
          path: '',
          name: 'expert-nav',
          component: ExpertHomeComponent,
        },
      ],
    }
  ]
})

export default router
