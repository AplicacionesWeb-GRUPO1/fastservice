import { createRouter, createWebHistory } from 'vue-router';
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import PageServicesPayment from "@/clients/ServicesPaymentPage/pageServicesPayment.vue";
import NotificationsPage from "@/clients/NotificationsPage/notifications.vue";
import HiredServices from "@/clients/HiredServices/hiredServices.vue";
import Publications from "@/clients/ClientPublications/publicationPosts.vue";
import Login from "@/loginPage/Login.vue";
import SignUp from "@/loginPage/SignUp.vue";
import HomePage from "@/Common/Pages/Home/HomePage.vue";
import Works from "@/expert/ExpertPublications/worksPosts.vue"

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
      meta: { requiresAuth: true },
    },
    {
      path: '/servicespayment',
      name: 'ServicesPayment',
      component: PageServicesPayment,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'ExpertProfile',
      component: ClientProfilePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/experts/appointments',
      name: 'ExpertAppointments',
      component: PageShowAppointmentsContent,
      meta: { requiresAuth: true },
    },
    {
      path: '/experts/favorites',
      name: 'ExpertFavorites',
      component: PageFavoritesExperts,
      meta: { requiresAuth: true },
    },
    {
      path: '/clients/profile',
      name: 'ClientProfile',
      component: ClientProfilePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/clients/notifications',
      name: 'Notifications',
      component: NotificationsPage,
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
    },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications,
      meta: { requiresAuth: true },
    },
    {
      path: '/works',
      name: 'Works',
      component: Works,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;

