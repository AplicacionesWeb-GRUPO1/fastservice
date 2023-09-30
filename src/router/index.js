import { createRouter, createWebHistory } from 'vue-router'
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import HomeContent from "@/expert/pages/home.content.component.vue";


//routes
/*
      <li><i class="pi pi-home"></i>Home</li>
      <li><i class="pi pi-users"></i>Mis Clientes</li>
      <li><i class="pi pi-upload"></i>Mis Publicaciones</li>
      <li><i class="pi pi-wallet"></i>Mis Pagos</li>
      <li><i class="pi pi-comments"></i>Chats</li>
      <li><i class="pi pi-wrench"></i>Herramientas</li>
      <li><i class="pi pi-cog"></i>Configuracion</li>
      <li><i class="pi pi-sign-out"></i>Logout</li>
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
        component: HomeContent,
      },
    {
        path: '/experts',
        name: 'Experts',
        component: GridProfilesContent,
    },
    {
        path: '/experts/profile',
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
    }

  ]
})

export default router
