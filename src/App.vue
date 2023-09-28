<script>
import Home from "@/views/HomeView.vue";
import SideMenu from "@/expert/pages/aside.component.vue"
import HomeContent from "@/expert/pages/home.content.component.vue"
import MyClient from "@/expert/pages/myClient.component.vue"
export default {
  name: "app",
  components: {
    Home,
    SideMenu,
    HomeContent,
    MyClient,
    'home-component': Home,
    'side-component': SideMenu,
    'home-content':HomeContent,
    'myclient-component': MyClient,
  },
  data() {
  },
};
</script>

<template>
<home-component></home-component>
  <SideMenu></SideMenu>
  <myclient-component></myclient-component>

</template>
<style scoped>
</style>