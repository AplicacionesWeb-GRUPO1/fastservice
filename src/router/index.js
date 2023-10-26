import { createRouter, createWebHistory } from 'vue-router'

import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import HomeContent from "@/expert/pages/home.content.component.vue";
import PageServicesPayment from "@/clients/ServicesPaymentPage/pageServicesPayment.vue";
import NotificationsPage from "@/clients/NotificationsPage/notifications.vue";
import HiredServices from "@/clients/HiredServices/hiredServices.vue";

/*
import Login from "@/loginPage/Login.vue";
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: '',
      component: HomeContent,
    },
    {
      path: '/',
      name: 'home',
      redirect: 'home'
    },

    {
      path: '/experts',
      name: 'Experts',
      component: GridProfilesContent,
    },
    {
      path: '/servicespayment',
      name: 'ServicesPayment',
      component: PageServicesPayment,
    },
    {
      path: '/profile',
      name: 'ExpertProfile',
      component: ClientProfilePage,
    }
    ,
    {
      path: '/experts/appointments',
      name: 'ExpertAppointments',
      component: PageShowAppointmentsContent,
    }
    ,
    {
      path: '/experts/favorites',
      name: 'ExpertFavorites',
      component: PageFavoritesExperts,
    },
    {
      path: '/clients/profile',
      name: 'ClientProfile',
      component: ClientProfilePage,
    },
    {
      path: '/clients/notifications',
      name: 'Notifications',
      component: NotificationsPage,
    },
    {
      path: '/clients/services',
      name: 'Services',
      component: HiredServices,
    },
  ]
})

export default router
