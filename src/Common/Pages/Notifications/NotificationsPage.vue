<script>
import ClientNotifications from "@/clients/NotificationsPage/clientNotificationsPage.vue";
import ExpertNotifications from "@/Users/Experts/ExpertNotificationPage/expertNotificationsPage.vue";

export default {
  name: 'NotificationsPage',
  components: { ExpertNotifications, ClientNotifications},
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
      <ClientNotifications/>
    </div>
    <div v-else>
      <ExpertNotifications/>
    </div>
  </div>
</template>

<style scoped>

</style>