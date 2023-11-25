<template>
  <div class="m-0">
    <card-component
        v-for="hiredService in hiredServices"
        :key="hiredService.id"
        :nombre="hiredService.expert.name"
        :rol="hiredService.expert.specialty"
        :trabajoSolicitado="hiredService.publication.description"
        :estadoTrabajo="hiredService.state"
        :foto="hiredService.publication.image"
        @aceptar="AceptarContrato(hiredService)"
        @rechazar="AceptarContrato(hiredService)"
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
        const contractsTrabajando = await contractServiceApiService.getContractsTrabajando(currentUser);
        const contractsTerminado = await contractServiceApiService.getContractsTerminado(currentUser);

        this.hiredServices = [...contractsTerminado, ...contractsTrabajando];

        console.log("Todos los contratos:", this.hiredServices);
      } catch (error) {
        console.error("Error obteniendo contratos:", error);
      }
    },
    async AceptarContrato(hiredService) {
      const contractServiceApiService = new ContractServiceApiService();
      try {
        await contractServiceApiService.changeToRechazado(hiredService);
        console.log("contratoaceptado");
      } catch (error) {
        console.error("Error updating contract:", error);
      }
    },
  },
};
</script>

<style scoped>
</style>
