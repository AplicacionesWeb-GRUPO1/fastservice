<template>
  <div class="job-posts m-0">
    <button class="create-button" @click="openDialog">Crear Publicación</button>

    <pv-dialog v-model:visible="dialogVisible" modal header="Agregar Publicacion" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <div class="form-container">
        <form>
          <div class="form-group">
            <label for="address">Dirección</label>
            <input id="address" type="text" v-model="editedPost.address" @input="savePost" />
          </div>
          <div class="form-group">
            <label for="title">Título</label>
            <input id="title" type="text" v-model="editedPost.title" @input="savePost" />
          </div>
          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea id="description" v-model="editedPost.description" @input="savePost"></textarea>
          </div>
          <div class="form-group">
            <label for="image">URL de la imagen</label>
            <input id="image" type="text" v-model="editedPost.imageUrl" @input="savePost" />
          </div>
          <div class="form-group">
            <a href="#" @click="postData">Guardar</a>
          </div>
        </form>
      </div>
    </pv-dialog>

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
              <button v-else @click="markAsCompleted(jobPost)">Marcar como finalizado</button>
            </div>
          </div>
        </div>
        <button v-if="editingPost === jobPost.id" @click="saveChanges(jobPost)">Guardar</button>
      </div>
      </div>
    </Card>
  </div>
   <br>
  <div>
    <form v-if="showCreateForm" @submit.prevent="createPost">
      <div>
        <label for="newTitle">Título:</label>
        <input v-model="newPost.title" type="text" id="newTitle" required />
      </div>
      <div>
        <label for="newAddress">Dirección:</label>
        <input v-model="newPost.address" type="text" id="newAddress" required />
      </div>
      <div>
        <label for="newDescription">Descripción del servicio:</label>
        <textarea v-model="newPost.description" id="newDescription" required></textarea>
      </div>
      <div>
        <label for="newImage">Imagen:</label>
        <input type="file" @change="handleImageChange" accept="image/*" id="newImage" />
      </div>
      <button type="submit">Crear Publicación</button>
    </form>
  </div>
  <br>
</template>

<script>
import {JobPublicationsApiService} from "@/services/JobPublications-api.service";

export default {
  name: 'Publications',
  components: {},
  data() {
    return {
      job_posts: [],
      editingPost: null,
      dialogVisible: false,
      editedPost: {
        address: '',
        title: '',
        description: '',
        image: 'asd',
        clientId: 0,
        isPublished: true
      }
    };
  },
  methods: {
    async getPostService() {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const jobPublicationsApiService = new JobPublicationsApiService();
      try {
        const jobPosts = await jobPublicationsApiService.getAllPublicationsByUser(currentUser);
        this.job_posts = jobPosts;
        console.log("job_posts", jobPosts);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.convertImageToBase64(file);
    },

    convertImageToBase64(file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.editedPost.image = reader.result;
        console.log('Imagen convertida a base64:', this.editedPost.image);
      };

      reader.readAsDataURL(file);
    },
    savePost() {
      console.log('Guardando...');

      console.log(this.editedPost); // Aquí tendrías la información actualizada
    },
    postData() {
      this.editedPost.clientId = JSON.parse(localStorage.getItem('user')).id;
      console.log("ID", this.editedPost.clientId);
      const publicationService = new JobPublicationsApiService();
      console.log("SE GUARDARA", this.editedPost);
      publicationService.createPublication(this.editedPost)
          .then(response => {
            console.log(response);
            this.closeDialog();
          })
          .catch(error => {
            console.log(error);
          });
    },
    markAsCompleted(jobPost) {
      jobPost.isPublished = false;
      const publicationService = new JobPublicationsApiService();
      publicationService.updatePublications(jobPost)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    },
    startEditing(jobPost) {
      this.editingPost = jobPost.id;
    },
    saveChanges(jobPost) {
      this.editingPost = null;
    },
    closeDialog(){
      this.dialogVisible = false;
    },
    openDialog() {
      this.dialogVisible = true;
    }

  },
  created() {
    this.getPostService();
  },
  computed: {
    filteredJobPosts() {
      return this.job_posts.filter(jobPost => jobPost.isPublished);
    }
  },
}
</script>

<style scoped>
.job-posts {
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
.create-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.form-container {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input[type="file"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
