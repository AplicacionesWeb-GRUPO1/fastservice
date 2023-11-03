<template>
  <div>
    <card-component
        v-for="hiredService in hiredServices"
        :key="hiredService.id"
        :nombre="hiredService.nombre"
        :rol="hiredService.rol"
        :trabajoSolicitado="hiredService.trabajoSolicitado"
        :estadoTrabajo="hiredService.estadoTrabajo"
        :foto="hiredService.foto"
        @aceptar="eliminarTarjeta(hiredService.id)"
        @rechazar="eliminarTarjeta(hiredService.id)"
      />
  </div>
</template>

<script>
import CardComponent from '@/clients/HiredServices/Components/card.vue';
import { UserApiService } from "@/services/user-api.service";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      hiredServices: [],
    };
  },
  created() {
    this.getHiredServices();
  },
  methods: {
    getHiredServices() {
      const userApiService = new UserApiService();
      userApiService.getSources().then((response) => {
        this.hiredServices = response.data.user_info.hiredServices;
      });
    },
    eliminarTarjeta(id) {
      this.hiredServices = this.hiredServices.filter((hiredService) => hiredService.id !== id);
    },
  },
};
</script>

<style scoped>
</style>
