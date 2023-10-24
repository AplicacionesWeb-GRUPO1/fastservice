<script>
import CardComponent from '@/clients/NotificationsPage/Components/card.vue';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      notificaciones: [
        {
          id: 1,
          nombre: 'Jhon Murphy',
          rol: 'Gasfitero',
          trabajoSolicitado: 'Fuga de agua en mi casa',
          precio: 23.0,
          fechaNotificacion: 'El 19/10/2023 a las 14:00h',
          foto: 'https://media.discordapp.net/attachments/1166116334975852734/1166116604652830771/Ellipse_171.png?ex=654951b7&is=6536dcb7&hm=5b05f3d2c0a4baff4e7b43fb2598d39f667658fc6301f45b308709e34c659c55&=',
        },
        {
          id: 2,
          nombre: 'Lola Lopez',
          rol: 'Gasfitero',
          trabajoSolicitado: 'Fuga de agua en mi casa',
          precio: 19.0,
          fechaNotificacion: 'El 19/10/2023 a las 15:00h',
          foto: 'https://media.discordapp.net/attachments/1166116334975852734/1166116379078950932/Ellipse_172_1.png?ex=65495182&is=6536dc82&hm=da6a6a6044b7a20aceee7807708d7af4d2bcfc9eb1436ec18d0d881816ab37b9&=',
        },
      ],
    };
  },
  methods: {
    eliminarTarjeta(id) {
      this.notificaciones = this.notificaciones.filter((notificacion) => notificacion.id !== id);
    },
  },
};
</script>

<template>
  <div>
    <card-component
        v-for="notificacion in notificaciones"
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

<style scoped>

</style>