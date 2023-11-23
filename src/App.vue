<template>
    <div>
      <side-bar-content :user="user" v-if="user"/>
      <div class="content" v-if="user">
        <nav-bar :name="user.name"></nav-bar>
        <router-view></router-view>
      </div>
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

export default {
  name: 'SideMenu',
  components: {SideBarContent, ClientProfilePage, PageShowAppointmentsContent, PageFavoritesExperts, HomeContent, navBar},
  data() {
    return {
      users: [],
      user: null,
      clientsApi: new ClientApiService(),
      expertsApi: new ExpertApiService()
    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource(){
      this.clientsApi.getUsers()
          .then(response =>{
            this.users = response.data; // Asignar la lista completa de usuarios
            this.user = this.users[0]; // Asignar el primer usuario por defecto
            console.log("user", this.user);
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


