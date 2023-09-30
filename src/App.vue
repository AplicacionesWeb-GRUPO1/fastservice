<template>
  <div class="sidebar">
    <div class="side-menu">
      <div class="profile-section">

        <router-link to="/experts/profile">
        <img src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" alt="Profile Image" class="profile-image"/>
        </router-link>


        <div class="profile-info">
          <div class="profile-name">John Murphy</div>
          <div class="profile-phone"><i class="pi pi-phone"></i>123-456-7890</div>
        </div>
      </div>
      <ul class="menu-list">
        <router-link to="/home" tag="li">
          <div class="menu-button"><i class="pi pi-home"></i>Home</div>
        </router-link>

        <router-link to="/experts" tag="li">
          <div class="menu-button"><i class="pi pi-users"></i>Mis Clientes</div>
        </router-link>

        <router-link to="/experts/profile" tag="li">
          <div class="menu-button"><i class="pi pi-upload"></i>Mis Publicaciones</div>
        </router-link>
        <router-link to="/experts/appointments" tag="li">
          <div class="menu-button"><i class="pi pi-wallet"></i>Mis Pagos</div>
        </router-link>
        <router-link to="/experts/favorites" tag="li">
          <div class="menu-button"><i class="pi pi-comments"></i>Chats</div>
        </router-link>
        <router-link to="/experts/favorites" tag="li">
          <div class="menu-button"><i class="pi pi-wrench"></i>Herramientas</div>
        </router-link>
        <router-link to="/experts/favorites" tag="li">
          <div class="menu-button"><i class="pi pi-cog"></i>Configuracion</div>
        </router-link>
        <router-link to="/experts/favorites" tag="li">
          <div class="menu-button"><i class="pi pi-sign-out"></i>LogOut</div>
        </router-link>
      </ul>
    </div>
  </div>

  <div class="content">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>

</template>

<script>
import HomeContent from "@/expert/pages/home.content.component.vue";
import navBar from "@/expert/pages/navBar.component.vue";
export default {

  name: 'SideMenu',
  components: {HomeContent, navBar},
}
</script>

<style scoped>
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




