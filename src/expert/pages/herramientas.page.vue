<script >

import {defineComponent} from "vue";
import HerramientaCardComponent from "@/expert/components/HerramientaCard.Component.vue";


import {UserApiService} from "@/services/user-api.service";

export default defineComponent({
  name: "pageHerramientas",
  components: {HerramientaCardComponent},
  data() {
    return {
      user_info: [],
      newsApi: new UserApiService(),
      Publications:[]
    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      this.newsApi.getSources().then((response) => {
        this.user_info = response.data.user_info;
        console.log(response.data);
        this.Publications = this.user_info.publications;
      });
    },
  },
})

</script>

<template >
  <div class="grid-container">
    <div v-for="publication in Publications" :key="publication.id">
      <div class="w-full">
        <herramienta-card-component
            :name="publication.name"
            :avatar="publication.avatar"
        ></herramienta-card-component>
      </div>
    </div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
}
</style>