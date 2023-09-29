<script >

import {defineComponent} from "vue";
import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";
import GridPublishCardContent from "@/clients/FavoritesExpertsPage/gridPublishCard-content.component.vue";
import PublishCardContent from "@/clients/FavoritesExpertsPage/publishCard-content.component.vue";
import ExpertCardContent from "@/clients/ExpertsAppointmentsScreen/components/expertCard-content.component.vue";

export default defineComponent({
  name: "pageFavoritesExperts",
  components: {ExpertCardContent, PublishCardContent, GridPublishCardContent, GridProfilesContent}
})


</script>

<template >
  <div class="px-28 space-y-20">
    <expert-card-content></expert-card-content>
    <grid-publish-card-content></grid-publish-card-content>
    <div>
      <h1 class="font-bold">Expertos Populares</h1>

      <div class="flex justify-center">
        <button class="opacity-40 hover:opacity-100">
          See all
        </button>
      </div>

      <grid-profiles-content></grid-profiles-content>
    </div>
  </div>
</template>

<style>

</style>