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
    async Terminado(contract) {
      const contractService = new ContractServiceApiService();

      try {
        await contractService.changeToTerminado(contract)
        console.log("terminado");
      } catch (error) {
        console.error("Error updating contract:", error);
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
  <div class="expert-home p-0 m-0">
    <Card v-for="contract in userContracts" :key="contract.id" class="job-card">
      <div class="p-fluid">
        <div class="job-post-content">
          <div class="image-section">
            <img :src="contract.publication.image" :alt="contract.publication.title" class="image" />
            <div class="image-description">{{ contract.publication.title }}</div>
          </div>
          <div class="details-section">
            <div class="title font-bold">
              <span>{{ contract.publication.title }}</span>
            </div>
            <div class="info">
              <div class="location">
                <label class="label">Dirección</label>
                <div class="content">{{ contract.publication.address }}</div>
              </div>
              <div class="description">
                <label class="label">Descripción del servicio</label>
                <div class="content">{{ contract.publication.description }}</div>
              </div>
              <div class="status">
                <div v-if="contract.isPublished === false" class="completed-status">Publicado</div>
                <div class="price" v-else>
                  <label class="label precio">Precio:</label>
                  <div class="contract-value">{{ contract.price }}</div>
                  <div class="contract-label">Estado:</div>
                  <div class="contract-value">{{ contract.state }}</div>
                  <div class="contract-label">Fecha:</div>
                  <div class="contract-value">{{ contract.date }}</div>
                  <!-- Agrega más campos si es necesario -->
                  <button @click=" Terminado(contract)">Marcar trabajo como Finalizado</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Botón de guardar si es necesario -->
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

.expert-home {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

.job-card {
  position: relative;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.2);
  background-color: #FFFFFF;
}

.job-post-content {
  display: flex;
  justify-content: space-between;
}

.image-section {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.image-description {
  color: #0d3c61;
  margin-top: 5px;
}

.details-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.title {
  margin-bottom: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.label {
  font-weight: bold;
}

.completed-status {
  color: green;
  margin-top: 5px;
}

button {
  background-color: #d98100;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.edit-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #e0e0e0;
  padding: 5px;
  border-radius: 5px;
}

.edit-input {
  width: 20em;
  height: 30px;
}

.precio{
  padding-right: 10px;
}
</style>



