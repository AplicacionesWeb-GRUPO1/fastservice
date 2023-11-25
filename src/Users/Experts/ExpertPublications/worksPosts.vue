<template>
  <div class="expert-home">
    <!-- Muestra los contratos en estado 'trabajando' del usuario -->
    <Card v-for="contract in userContracts" :key="contract.id" class="contract-card">
      <div class="p-fluid">
        <div class="contract-details">
          <div class="contract-info">
            <div class="contract-label">ID del Contrato:</div>
            <div class="contract-value">{{ contract.id }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">Dirección:</div>
            <div class="contract-value">{{ contract.address }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">Título:</div>
            <div class="contract-value">{{ contract.title }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">Descripción:</div>
            <div class="contract-value">{{ contract.description }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">Publicado:</div>
            <div class="contract-value">{{ contract.isPublished ? 'Sí' : 'No' }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">ID del Cliente:</div>
            <div class="contract-value">{{ contract.clientId }}</div>
          </div>
          <div class="contract-info">
            <div class="contract-label">Imagen:</div>
            <div class="contract-value">{{ contract.image }}</div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { ContractServiceApiService } from "@/services/ContractService-api.service";

export default {
  name: 'ExpertHome',
  data() {
    return {
      userContracts: [],
    };
  },
  methods: {
    async getContractsTrabajando(user) {
      // Lógica para obtener los contratos en estado 'trabajando' del usuario
      const contractService = new ContractServiceApiService();
      try {
        const contractsTrabajando = await contractService.getContractsTrabajando(user.id);
        this.userContracts = contractsTrabajando;
        console.log("Contratos en estado 'trabajando' del usuario:", contractsTrabajando);
      } catch (error) {
        console.error("Error fetching user contracts:", error);
      }
    },
  },
  created() {
    // Llama al método para obtener los contratos al cargar el componente
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.getContractsTrabajando(currentUser);
  },
};
</script>

<style scoped>
/* Agrega estilos según sea necesario */
</style>
