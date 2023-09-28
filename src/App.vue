<script>
import Home from "@/views/HomeView.vue";
import SideMenu from "@/expert/pages/aside.component.vue"
import HomeContent from "@/expert/pages/home.content.component.vue"
export default {
  name: "app",
  components: {
    Home,
    SideMenu,
    HomeContent,
    'home-component': Home,
    'side-component': SideMenu,
    'home-content':HomeContent,
  },
  data() {
  },
};
</script>

<template>
<home-component></home-component>
  <SideMenu></SideMenu>
  <home-content></home-content>
</template>
