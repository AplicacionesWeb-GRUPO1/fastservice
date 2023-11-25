<script>

import ClientPayments from "@/clients/ServicesPaymentPage/pageServicesPayment.vue";
import ExpertPayments from "@/expert/ExpertPaymentPage/ExpertPaymentPage.vue";

export default {
  name: 'PaymentsPage',
  components: {ExpertPayments, ClientPayments},
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
      <ExpertPayments/>
    </div>
  </div>
</template>

<style scoped>

</style>