<script>
import ClientNotifications from "@/clients/NotificationsPage/clientNotificationsPage.vue";
import ExpertNotifications from "@/Users/Experts/ExpertNotificationPage/expertNotificationsPage.vue";
import ClientPayments from "@/clients/ServicesPaymentPage/pageServicesPayment.vue";

export default {
  name: 'NotificationsPage',
  components: {ClientPayments, ExpertNotifications, ClientNotifications},
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
      <ClientPayments/>
    </div>
    <div v-else>
      <ExpertNotifications/>
    </div>
  </div>
</template>

<style scoped>

</style>