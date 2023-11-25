<template>
  <div>
    <card-component
        v-for="hiredService in hiredServices"
        :key="hiredService.id"
        :nombre="hiredService.expert.name"
        :rol="hiredService.expert.specialty"
        :trabajoSolicitado="hiredService.publication.description"
        :estadoTrabajo="hiredService.state"
        :foto="hiredService.publication.image"
        @aceptar="eliminarTarjeta(hiredService.id)"
        @rechazar="eliminarTarjeta(hiredService.id)"
      />
  </div>
</template>

<script>
import CardComponent from '@/clients/HiredServices/Components/card.vue';
import {ContractServiceApiService} from "@/services/ContractService-api.service";

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
     async getHiredServices() {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const contractServiceApiService = new ContractServiceApiService();
      try {
        const contracts = await contractServiceApiService.getContractsAceptado(currentUser  );
        this.hiredServices = contracts;
        console.log("asd", contracts);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    },
    eliminarTarjeta(id) {
      this.hiredServices = this.hiredServices.filter((hiredService) => hiredService.id !== id);
    },
  },
};
</script>

<style scoped>
</style>
