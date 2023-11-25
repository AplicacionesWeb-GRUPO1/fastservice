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
        @aceptar="AceptarContrato(notificacion)"
        @rechazar="RechazarContrato(notificacion)"
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
      contractServices: null
    };
  },
  created() {
    this.getNotifications();
    this.contractServices= new ContractServiceApiService();
  },
  methods: {
    async getNotifications() {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const contractServiceApiService = new ContractServiceApiService();
      try {
        const contractsNotifications = await contractServiceApiService.getContractsProgress(currentUser);
        this.notifications = contractsNotifications;
        console.log("asd", contractsNotifications);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    },
    async AceptarContrato(notificacion) {
      try {
        await this.contractServices.changeToAceptado(notificacion)
        console.log("contratoaceptado");
      } catch (error) {
        console.error("Error updating contract:", error);
      }
    },
    async  RechazarContrato(notificacion) {
      try {
        await this.contractServices.changeToRechazado(notificacion)
      } catch (error) {
        console.error("Error updating contract:", error);
      }
    },
  },
};
</script>

<style scoped>
</style>
