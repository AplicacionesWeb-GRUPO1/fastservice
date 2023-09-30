<script>
import Home from "@/views/HomeView.vue";
import SideMenu from "@/expert/pages/aside.component.vue"
import HomeContent from "@/expert/pages/home.content.component.vue"
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ExpertCardContent from "@/clients/ExpertsAppointmentsScreen/components/expertCard-content.component.vue";
import CardData from "@/cards/CardsFavorite/cardData.vue";
import CardRecord from "@/cards/CardsFavorite/cardRecord.vue";
import CardComponent from "@/cards/CardsFavorite/cardComponent.vue";

export default {
  name: "app",
  components: {
    CardData,
    CardRecord,
    CardComponent,
    ExpertCardContent,
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
  <card-component></card-component>
</template>



