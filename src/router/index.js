import { createRouter, createWebHistory } from 'vue-router'
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import NotificationsPage from "@/clients/NotificationsPage/clientNotificationsPage.vue";
import HiredServices from "@/clients/HiredServices/hiredServices.vue";
import Publications from "@/clients/ClientPublications/publicationPosts.vue";


import Login from "@/loginPage/Login.vue";
import SignUp from "@/loginPage/SignUp.vue";
import HomePage from "@/Common/Pages/Home/HomePage.vue";
import PaymentsPage from "@/Common/Pages/Payments/PaymentsPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: '',
      component: HomePage,
    },
    {
      path: '/',
      name: 'login',
      redirect: 'login'
    },

    {
      path: '/experts',
      name: 'Experts',
      component: GridProfilesContent,
    },
    {
      path: '/servicespayment',
      name: 'ServicesPayment',
      component: PaymentsPage,
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
      path: '/notifications',
      name: 'Notifications',
      component: NotificationsPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp,
    },
    {
      path: '/clients/services',
      name: 'Services',
      component: HiredServices,
    },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications,
    }
  ]
})

export default router
