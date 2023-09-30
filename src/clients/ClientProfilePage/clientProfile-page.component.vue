<script>
import ProfileImagesContent from "@/clients/ClientProfilePage/components/profileImages-content.component.vue";
import PersonalInfoCardContent from "@/clients/ClientProfilePage/components/personalInfoCard-content.component.vue";

export default {
  name: "clientProfile-page",
  components: {PersonalInfoCardContent, ProfileImagesContent},
  data() {
    return {
      users: [
        {
          name: "Perez",
          tagName: "Nombre", // Pasa el valor tagName al componente hijo
        },
        {
          name: "+8801800000000",
          tagName: "Contact Number", // Pasa el valor tagName al componente hijo
        },
        {
          name: "DD MM YYYY",
          tagName: "Date of birth", // Pasa el valor tagName al componente hijo
        },
        {
          name: ".........",
          tagName: "Descripcion", // Pasa el valor tagName al componente hijo
        },
      ]
    };
  }
}
</script>

<template>
  <div class="p-3">
    <profile-images-content  :name="users[0].name"/>
     <div v-for="user in users" :key="user.name">
        <personal-info-card-content :name="user.name" :tagName="user.tagName" />
     </div>
  </div>
</template>

<style >

</style>