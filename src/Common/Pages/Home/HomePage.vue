<script>
import ExpertHome from "@/expert/ExpertHomePage/experthome.vue";
import ClientHome from "@/clients/ClientHomePage/home.content.component.vue";

export default {
  name: 'HomePage',
  components: {ClientHome, ExpertHome},
  data() {
    return {
      user : JSON.parse(localStorage.getItem('user'))
    };
  },
}
</script>

<template>
  <div>
    <div v-if="user.role === 'client'">
      <ClientHome/>
    </div>
    <div v-else>
      <ExpertHome/>
    </div>
  </div>
</template>

<style scoped>

</style>