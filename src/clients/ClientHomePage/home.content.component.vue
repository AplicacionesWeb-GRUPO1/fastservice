<template>
  <div class="main-container">
    <section class="section">
      <h2>Tipos de Servicios</h2>
      <br>
      <div class="tool-cards">
        <Card class="tool">
          <i class="pi pi-desktop"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-sun"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-wrench"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-truck"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-trash"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-wifi"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-shopping-bag"></i>
        </Card>
      </div>
    </section>
    <br>
    <section class="section">
      <h2>Expertos elegidos para ti</h2>
      <br>
      <div class="user-cards">
        <Card v-for="expert in experts" :key="expert.id" class="user-card">
          <div class="user-card-content">
            <div class="user-image-container">
              <img :src="expert.avatar" class="user-image" alt="User Image">
            </div>
            <div class="user-info">
              <div class="user-name">{{ expert.name }}</div>
              <div class="user-profession">Profesion: {{ expert.specialty }}</div>
              <div class="user-rating">
                <i class="pi pi-star" style="color: #FFD700; font-size: 20px;"></i>
                {{ expert.rating }}
              </div>
            </div>
          </div>
          <div class="user-stats">
            <div class="user-stat">
              <div class="user-stat-label">Trabajos Completados</div>
              <div class="user-stat-value">10</div>
              <!-- <div class="user-stat-value">{{ expert.jobs_completed }}</div> -->
            </div>
            <div class="user-stat">
              <div class="user-stat-label">Reseñas</div>
              <div class="user-stat-value">10</div>
              <!--<div class="user-stat-value">{{ expert.review_count }}<!/div>-->
            </div>
          </div>
          <div class="availability-indicator" :class="expert.id ? 'available' : 'unavailable'">
            {{ expert.id ? 'Disponible' : 'No Disponible' }}
          </div>
          <!--<div class="availability-indicator" :class="expert.available ? 'available' : 'unavailable'">
           {{ expert.available ? 'Disponible' : 'No Disponible' }}
         </div>-->
       </Card>
     </div>
   </section>
 </div>
</template>


<script >
import {ExpertApiService} from "@/services/expert-api.service";
export default {
 name: 'HomeContent',
 data() {
   return {
     experts: [],
     expertApiService: new ExpertApiService()
   };
 },
 created() {
   this.getRecommendedExperts();
 },
 methods: {
     getRecommendedExperts(){
       this.expertApiService.getAllExperts()
           .then(response => {
             this.experts = response;
             console.log(response);
       })
     }
 },
}

</script>

<style >
.main-container {
 padding: 20px;
 margin-left: 5px;
}

.section {
 display: flex;
 flex-direction: column;
}

.user-cards, .tool-cards {
 display: flex;
 flex-wrap: wrap;
 gap: 10px;
 justify-content: center;
}

h2 {
 font-size: 24px;
 margin-top: 20px;
 margin-bottom: 20px;
 text-align: left;
 margin-left: 57px;
}


img {
 width: 200px;
 margin-right: 10px;
}

.tool-cards {
 display: flex;
 align-items: center;
 overflow-x: auto;
 scroll-behavior: smooth;
 width: 100%;
 white-space: nowrap;
}

.tool {
 margin-right: 20px;
 text-align: center;
}

.tool i {
 font-size: 36px;
 color: #fff;
 background-color: #3498db;
 width: 90px;
 height: 90px;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.customer-image img {
 width: 50%;
 height: auto;
 padding-top: 20%;
}

.user-cards {
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
 justify-content: center;
}

.user-card {
 width: 300px;
 border-radius: 10px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 transition: transform 0.2s;
}

.user-card:hover {
 transform: scale(1.02);
}

.user-card-content {
 display: flex;
 align-items: center;
 padding: 20px;
}

.user-image-container {
 width: 70px;
 height: 70px;
 border-radius: 50%;
 overflow: hidden;
}

.user-image {
 width: 100%;
 height: 100%;
 object-fit: cover;
}

.user-info {
 flex: 1;
 margin-left: 20px;
}

.user-name {
 font-size: 20px;
 font-weight: 600;
}

.user-profession {
 color: #555;
}

.user-rating {
 display: flex;
 align-items: center;
 font-size: 16px;
}

.user-stats {
 display: flex;
 justify-content: space-between;
 margin-top: 10px;
 font-size: 16px;
}

.user-stat-label {
 margin-left: 10px;
 margin-right: 12px;
 color: #555;
}

.user-stat-value {
 margin-left: 10px; /* Adjust the margin for spacing */
}

.availability-indicator {
 text-align: center;
 margin-top: 10px;
 padding: 10px;
 font-size: 16px;
 border-radius: 5px;
 width: 100%;
}

.available {
 background-color: #4CAF50; /* Green */
 color: white;
}

.unavailable {
 background-color: #F44336; /* Red */
 color: white;
}
</style>


