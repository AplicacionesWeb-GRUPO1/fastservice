<template>
  <div v-if="onlogged">
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
import HomeContent from "@/Users/ClientHomePage/home.content.component.vue";
import navBar from "@/Users/Experts/pages/navBar.component.vue";
import PageFavoritesExperts from "@/clients/FavoritesExpertsPage/pageFavoritesExperts.vue";
import PageShowAppointmentsContent from "@/clients/ExpertsAppointmentsScreen/pageShowAppointments-conten.component.vue";
import ClientProfilePage from "@/clients/ClientProfilePage/clientProfile-page.component.vue";
import SideBarContent from "@/Common/SideBar/Components/SideBarComponent.vue";
import LoginPage from "@/loginPage/LoginPage/LoginPage.vue";

export default {
  name: 'SideMenu',
  components: {
    LoginPage,
    SideBarContent, ClientProfilePage, PageShowAppointmentsContent, PageFavoritesExperts, HomeContent, navBar},
  data() {
    return {
      users: [],
      loggedUser: {},
      onlogged: false
    }
  },
  created() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.loggedUser = JSON.parse(storedUser);
      this.onlogged = true;
    } else {
      this.onlogged = false;
    }
  },
  methods: {
    getSource(){
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


