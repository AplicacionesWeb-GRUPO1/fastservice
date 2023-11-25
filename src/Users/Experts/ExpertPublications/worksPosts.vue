<script>
import { ContractServiceApiService } from "@/services/ContractService-api.service";

export default {
  name: 'ExpertHome',
  data() {
    return {
      userContracts: [],
      contractServices: null
    };
  },
  methods: {
    async getContractsTrabajando() {
      // Lógica para obtener los contratos en estado 'trabajando' del usuario
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const contractServiceApiService = new ContractServiceApiService();
      try {
        const contractsTrabajando = await contractServiceApiService.getContractsTrabajando(currentUser);
        this.userContracts = contractsTrabajando;
        console.log("Contratos en estado 'trabajando' del usuario:", contractsTrabajando);
      } catch (error) {
        console.error("Error fetching user contracts:", error);
      }
    },
  },
  created() {
    // Llama al método para obtener los contratos al cargar el componente
    this.getContractsTrabajando();
    const contractServices = new ContractServiceApiService();
  },
};
</script>


<template>
  <div class="expert-home">
    <!-- Muestra los contratos en estado 'trabajando' del usuario -->
    <Card v-for="contract in userContracts" :key="contract.id" class="contract-card">
      <div class="p-fluid">
        <div class="contract-details">
          <div class="image-info-container">
            <img :src="contract.publication.image" alt="Imagen de la Publicación" class="publication-image">
            <div class="contract-info">
              <div class="contract-label">Publicación:</div>
              <div class="contract-value">{{ contract.publication.title }}</div>
              <!-- Agregar más campos según sea necesario -->
              <div class="contract-label">Dirección:</div>
              <div class="contract-value">{{ contract.publication.address }}</div>
              <!-- Agregar más campos según sea necesario para la información de la publicación -->
              <div class="contract-label">Nombre del Cliente:</div>
              <div class="contract-value">{{ contract.publication.client.name }}</div>
              <!-- Agregar más campos según sea necesario para la información del cliente -->
              <div class="contract-label">Nombre del Experto:</div>
              <div class="contract-value">{{ contract.expert.name }}</div>
              <!-- Agregar más campos según sea necesario para la información del experto -->
              <!-- Información de la fecha, precio, etc. -->
              <div class="contract-label">Precio:</div>
              <div class="contract-value">{{ contract.price }}</div>
              <div class="contract-label">Estado:</div>
              <div class="contract-value">{{ contract.state }}</div>
              <div class="contract-label">Fecha:</div>
              <div class="contract-value">{{ contract.date }}</div>
              <!-- Puedes seguir agregando más campos según sea necesario -->
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.expert-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contract-card {
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contract-details {
  display: flex;
  flex-direction: column;
}

.image-info-container {
  display: flex;
}

.contract-info {
  margin-left: 10px;
}

.contract-label {
  font-weight: bold;
  color: #000000;
}

.contract-value {
  color: #000000;
}

.publication-image {
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 10px;
  display: block;
}
</style>



