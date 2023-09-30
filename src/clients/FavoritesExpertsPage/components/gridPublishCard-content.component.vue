<script >
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import PublishCardContent from "@/clients/FavoritesExpertsPage/components/publishCard-content.component.vue";

export default {
  name: "gridPublishCard-content",
  components: {PublishCardContent, UsersProfileCardContent},
  props: {
    publications: Array
  }
};

</script>

<template>
  <div class="grid-container">
    <div v-for="publication in publications" :key="publication.id">
      <div class="w-full">
        <publish-card-content
            :name="publication.name"
            :avatar="publication.avatar"
        ></publish-card-content>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
</style>