<template>
  <side-bar-content :user="user_info.user"></side-bar-content>
  <div class="content ">
    <nav-bar :name="user_info.user.name"
    ></nav-bar>
    <router-view
    ></router-view>
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
            console.log(response.data);
          })
    }
  },

}
</script>

<style scoped>
.menu-list li {
  margin: 10px 0;
  cursor: pointer;
  transition: color 0.5s;
}

.menu-list li i {
  margin-right: 10px;
  margin-bottom: 20px;
}

.menu-list li:hover {
  color: #000000;
}


.content {
  margin-left: 250px;
  height: 100%;
  width: auto;
  position: relative;
  z-index: 1;
}


</style>


