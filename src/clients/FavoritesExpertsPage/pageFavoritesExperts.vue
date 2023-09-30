<script >

import {defineComponent} from "vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import GridPublishCardContent from "@/clients/FavoritesExpertsPage/components/gridPublishCard-content.component.vue";
import PublishCardContent from "@/clients/FavoritesExpertsPage/components/publishCard-content.component.vue";
import ExpertCardContent from "@/clients/ExpertsAppointmentsScreen/components/expertCard-content.component.vue";
import {UserApiService} from "@/services/user-api.service";

export default defineComponent({
  name: "pageFavoritesExperts",
  components: {ExpertCardContent, PublishCardContent, GridPublishCardContent, GridProfilesContent},
  data() {
    return {
      user_info: [],
      newsApi: new UserApiService(),
      Publications:[],
      Popular_experts:[]
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

        this.Popular_experts = this.user_info.popular_experts;
        this.Publications = this.user_info.publications;

      });
    },
  },
})

</script>

<template >
  <div class="px-28 space-y-20">
    <expert-card-content></expert-card-content>
    <grid-publish-card-content :publications="Publications"></grid-publish-card-content>
    <div>
      <h1 class="font-bold">Expertos Populares</h1>

      <div class="flex justify-center">
        <button class="opacity-40 hover:opacity-100">
          See all
        </button>
      </div>
        <grid-profiles-content :popular_experts="Popular_experts" ></grid-profiles-content>
    </div>
  </div>
</template>

<style>

</style>