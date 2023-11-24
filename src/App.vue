<template>
  <div v-if="onlogged">
    <side-bar-content :user="user" v-if="user"/>
    <div class="content" v-if="user">
      <nav-bar :name="user.name"/>
      <router-view/>
    </div>
  </div>
  <div v-else>
    <login-page/>
  </div>
</template>

<script>
import HomeContent from "@/clients/ClientHomePage/home.content.component.vue";
import navBar from "@/expert/pages/navBar.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import SideBarContent from "@/Common/SideBar/Components/SideBarComponent.vue";
import {ClientApiService} from "@/services/client-api.service";
import {ExpertApiService} from "@/services/expert-api.service";
import LoginPage from "@/loginPage/LoginPage/LoginPage.vue";
import {AuthServiceApiService} from "@/services/AuthService-api.service";

export default {
  name: 'SideMenu',
  components: {
    LoginPage,
    SideBarContent, ClientProfilePage, PageShowAppointmentsContent, PageFavoritesExperts, HomeContent, navBar},
  data() {
    return {
      users: [],
      user: null,
      clientsApi: new ClientApiService(),
      expertsApi: new ExpertApiService(),
      authService: new AuthServiceApiService(),
      onlogged: false
    }
  },
  computed: {
    isLoggedIn() {
      return false;
    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource(){
      this.clientsApi.getUsers()
          .then(response =>{
            console.log(response);
            this.user= response.user_client;
            console.log("usario", this.user);
            //  this.user = this.users[0]; // Asignar el primer usuario por defecto
            console.log("user", this.user.name);
            console.log("user", this.user.role);

          })
    }

  //  getSource(){
  //    this.expertsApi.getExperts()
  //        .then(response =>{
  //          this.users = response.data; // Asignar la lista completa de usuarios
  //          this.user = this.users[0]; // Asignar el primer usuario por defecto
  //        })
  //  }

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


