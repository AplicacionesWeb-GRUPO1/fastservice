<script>
import Home from "@/views/HomeView.vue";
import SideMenu from "@/expert/pages/aside.component.vue"
import HomeContent from "@/expert/pages/home.content.component.vue"
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import {UserApiService} from "@/services/user-api.service";

export default {
  name: "app",
  components: {
    ClientProfilePage,
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
    return {
      user_info: [],
      newsApi: new UserApiService()
    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource(){
      this.newsApi.getSources()
          .then(response =>{
            this.user_info= response.data;
            console.log(response.data);
          })
    }
  },
};
</script>


<template>
  <div class="sidebar">
    <side-menu></side-menu>
  </div>
  <div class="content">
  <client-profile-page :user="user_info.user"></client-profile-page>
  </div>
</template>

<style>
.sidebar {
  position: fixed;
  width: 200px;
  height: 400px;
  background: #000;
}

.content {
  margin-left: 250px;
  height: 100%;
  width: auto;
  position: relative;
  z-index: 1;
}

.info {
  width: 1440px;
  height: 300px;
  position: relative;
  background: #f55;
}

</style>



