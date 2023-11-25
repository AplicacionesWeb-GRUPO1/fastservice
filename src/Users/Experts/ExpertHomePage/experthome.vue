<template>
  <div class="expert-home mt-0">
    <Card v-for="jobPost in filteredJobPosts" :key="jobPost.id" class="job-card">
      <div v-if="jobPost.isPublished">
      <div class="p-fluid">
        <div class="job-post-content">
          <div class="image-section">
            <img :src="jobPost.image" :alt="jobPost.title" class="image" />
            <div class="image-description">{{ jobPost.title }}</div>
          </div>
          <div class="details-section">
            <div class="title font-bold">
              <strong v-if="editingPost === jobPost.id">
                <input class="edit-input" v-model="jobPost.title" />
              </strong>
              <span v-else>{{ jobPost.title }}</span>
            </div>
            <div class="info">
              <div class="location">
                <label class="label">Dirección</label>
                <div class="content" v-if="editingPost === jobPost.id">
                  <input class="edit-input" v-model="jobPost.address" />
                </div>
                <div class="content" v-else>{{ jobPost.address }}</div>
              </div>
              <div class="description">
                <label class="label">Descripción del servicio</label>
                <div class="content" v-if="editingPost === jobPost.id">
                  <textarea class="edit-input" v-model="jobPost.description"></textarea>
                </div>
                <div class="content" v-else>{{ jobPost.description }}</div>
              </div>
              <div class="status">
                <div v-if="jobPost.isPublished === false" class="completed-status">Publicado</div>
                <div class="price" v-else>
                  <label class="label precio">Ingrese su precio</label>
                  <input class="edit-input" v-model="jobPost.price" placeholder="Ingrese el precio" />
                  <button @click="acceptJob(jobPost)">Solicitar trabajo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button v-if="editingPost === jobPost.id" @click="saveChanges(jobPost)">Guardar</button>
      </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { JobPublicationsApiService } from "@/services/JobPublications-api.service";
import { ContractServiceApiService } from "@/services/ContractService-api.service";

// Función para formatear la fecha
function formatearFecha(fecha) {
  const date = new Date(fecha);
  const dia = date.getDate().toString().padStart(2, '0');
  const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Nota: los meses comienzan desde 0
  const año = date.getFullYear();

  return `${dia}/${mes}/${año}`;
}

export default {
  name: 'ExpertHome',
  data() {
    return {
      job_posts: [],
      editingPost: null,
    };
  },
  methods: {
    async getPostService() {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const jobPublicationsApiService = new JobPublicationsApiService();
      try {
        const jobPosts = await jobPublicationsApiService.getAllJobPost();
        this.job_posts = jobPosts;
        console.log("job_posts", jobPosts);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    },
    async acceptJob(jobPost) {
      try {
        if (!jobPost) {
          console.error("jobPost es null o indefinido");
          return;
        }
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log("currentUser", currentUser);
        const contractService = new ContractServiceApiService();
        console.log("jobPost", jobPost)
        const contractData = {
          publicationId: jobPost.id,
          expertId: currentUser.id,
          price: jobPost.price || 0,
          state: "progress",
          date: formatearFecha(new Date().toISOString()),
        };
        console.log("publicationId", contractData.publicationId)

        const createdContract = await contractService.createContract(contractData);

        console.log("Contrato creado:", createdContract);
        

        // Marcar el trabajo como aceptado
        this.markAsCompleted(jobPost);

      } catch (error) {
        console.error("Error al aceptar el trabajo:", error);
      }
    },
    markAsCompleted(jobPost) {
      jobPost.isPublished = false;
    },
    startEditing(jobPost) {
      this.editingPost = jobPost.id;
    },
    saveChanges(jobPost) {
      this.editingPost = null;
    },
  },
  created() {
    this.getPostService();
  },
  computed: {
    filteredJobPosts() {
      return this.job_posts.filter(jobPost => jobPost.isPublished);
    }
  },
};
</script>

<style scoped>
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
