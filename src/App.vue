<script>
import Home from "@/views/HomeView.vue";
import SideMenu from "@/expert/pages/aside.component.vue"
import HomeContent from "@/expert/pages/home.content.component.vue"
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";

export default {
  name: "app",
  components: {
    PageFavoritesExperts,
    GridProfilesContent,
    UsersProfileCardContent,
    PageShowAppointmentsContent,
    Home,
    SideMenu,
    HomeContent,
    'home-component': Home,
    'side-component': SideMenu,
    'home-content':HomeContent,
  },
  data() {
  },
};
</script>

<template>
<home-component></home-component>
  <page-favorites-experts></page-favorites-experts>
</template>



