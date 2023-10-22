<template>
  <div>
    <side-bar-content :user="user_info.user2" v-if="user_info.user2"></side-bar-content>
    <div class="content" v-if="user_info.user2">
      <nav-bar :name="user_info.user2.name"></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeContent from "@/expert/pages/home.content.component.vue";
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
            console.log(response.data.user_info.user1);
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


