<template>
  <div>
    <client-notifications-card
        v-for="notificacion in notifications"
        :key="notificacion.id"
        :nombre="notificacion.expert.name"
        :rol="notificacion.expert.specialty"
        :trabajoSolicitado="notificacion.publication.description"
        :precio="notificacion.price"
        :fechaNotificacion="notificacion.date"
        :foto="notificacion.expert.avatar"
        @aceptar="eliminarTarjeta(notificacion.id)"
        @rechazar="eliminarTarjeta(notificacion.id)"
    />
  </div>
</template>

<script>
import CardComponent from '@/clients/NotificationsPage/Components/clientNotificationCard.vue';
import {ContractServiceApiService} from "@/services/ContractService-api.service";
import ClientCardNotification from "@/clients/NotificationsPage/Components/clientNotificationCard.vue";
import ClientNotificationsCard from "@/clients/NotificationsPage/Components/clientNotificationCard.vue";

export default {
  name: 'ClientNotifications',
  components: {
    ClientNotificationsCard,
    ClientCardNotification,
    CardComponent,
  },
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.getNotifications();
  },
  methods: {
    async getNotifications() {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const contractServiceApiService = new ContractServiceApiService();
      try {
        const contractsNotifications = await contractServiceApiService.getContractsProgress(currentUser.id);
        this.notifications = contractsNotifications;
        console.log("asd", contractsNotifications);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    },
    eliminarTarjeta(id) {
      this.notifications = this.notifications.filter((notificacion) => notificacion.id !== id);
    },
  },
};
</script>

<style scoped>
</style>
