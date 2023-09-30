<template>
  <div class="sidebar">
    <side-menu></side-menu>
  </div>
  <div class="content">
    <client-profile-page :user="user_info.user"></client-profile-page>
  </div>
</template>


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
            this.user_info= response.data.user_info;
            console.log(response.data);
          })
    }
  },
};
</script>


<style>
.side-menu {
  width: 250px;
  background: linear-gradient(to right, #9b59b6,#3498db);
  color: #fff;
  padding: 20px;
  height: 100%;
  position: fixed;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 5px;
}

.menu-list {
  list-style-type: none;
  padding: 10px;
}

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

</style>



