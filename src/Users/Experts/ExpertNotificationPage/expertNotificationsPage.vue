<script>
import CardComponent from "@/clients/NotificationsPage/Components/clientNotificationCard.vue";

export default {
  name: 'ExpertNotifications',
  components: {CardComponent}
}
</script>
<div>
<card-component
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
<template>

</template>

<style>

</style>