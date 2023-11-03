<template>
  <div>
    <card-component
        v-for="notificacion in notifications"
        :key="notificacion.id"
        :nombre="notificacion.nombre"
        :rol="notificacion.rol"
        :trabajoSolicitado="notificacion.trabajoSolicitado"
        :precio="notificacion.precio"
        :fechaNotificacion="notificacion.fechaNotificacion"
        :foto="notificacion.foto"
        @aceptar="eliminarTarjeta(notificacion.id)"
        @rechazar="eliminarTarjeta(notificacion.id)"
    />
  </div>
</template>

<script>
import CardComponent from '@/clients/NotificationsPage/Components/card.vue';
import { UserApiService } from "@/services/user-api.service";

export default {
  components: {
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
    getNotifications() {
      const userApiService = new UserApiService();
      userApiService.getSources().then((response) => {
        this.notifications = response.data.user_info.notifications;
      });
    },
    eliminarTarjeta(id) {
      this.notifications = this.notifications.filter((notificacion) => notificacion.id !== id);
    },
  },
};
</script>

<style scoped>
</style>
