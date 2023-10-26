<template>
  <div>
    <side-bar-content :user="user" v-if="user"></side-bar-content>
    <div class="content" v-if="user">
      <nav-bar :name="user.name"></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeContent from "@/clients/ClientHomePage/home.content.component.vue";
import navBar from "@/expert/pages/navBar.component.vue";
import {UserApiService} from "@/services/user-api.service";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import SideBarContent from "@/Common/SideBar/Components/SideBarComponent.vue";

export default {
  name: 'SideMenu',
  components: {SideBarContent, ClientProfilePage, PageShowAppointmentsContent, PageFavoritesExperts, HomeContent, navBar},
  data() {
    return {
      user_info: [],
      user: [],
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
            this.user_info= response.data.user_info;
            this.user= response.data.user_info.user_client;
          })
    }
  },

}
</script>

<style scoped>


.content {
  margin-left: 250px;
  height: 100%;
  width: auto;
  position: relative;
  z-index: 1;
}


</style>


