<template>
  <div v-if="onlogged">
    <h1>{{loggedUser}}</h1>
    <side-bar-content :user="loggedUser" v-if="loggedUser"/>
    <div class="content">
      <nav-bar :name="loggedUser.name"/>
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
      loggedUser: {},
      clientsApi: new ClientApiService(),
      expertsApi: new ExpertApiService(),
      authService: new AuthServiceApiService(),
      onlogged: false
    }
  },
  created() {
    const storedUser = localStorage.getItem("user");
    console.log("asd", storedUser);

    if (storedUser) {
      console.log("asd");
      this.loggedUser = JSON.parse(storedUser);
      this.onlogged = true;
    } else {
      this.getSource();
    }
  },
  methods: {
    getSource(){
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


