<script>
  import {defineComponent} from "vue";
  import cardData from "@/cards/CardsFavorite/cardData.vue";
  import cardRecord from "@/cards/CardsFavorite/cardRecord.vue";
  //import ExpertCardContent from "@/clients/ExpertsAppointmentsScreen/components/expertCard-content.component.vue";
  //import GridPublishCardContent from "@/clients/FavoritesExpertsPage/gridPublishCard-content.component.vue";
 // import GridProfilesContent from "@/GeneralComponents/gridProfiles-content.component.vue";

  export default defineComponent({
    name: "cardComponent",
    components: { cardData, cardRecord}
  })
</script>

<template>
  <div class="px-28 space-y-20">
    <card-data></card-data>
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

<style scoped>

</style>