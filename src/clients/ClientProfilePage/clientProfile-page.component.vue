<script>
import ProfileImagesContent from "@/clients/ClientProfilePage/components/profileImages-content.component.vue";
import PersonalInfoCardContent from "@/clients/ClientProfilePage/components/personalInfoCard-content.component.vue";
import {UserApiService} from "@/services/user-api.service";
import {ClientApiService} from "@/services/client-api.service";

export default {
  name: "clientProfile-page",
  components: {PersonalInfoCardContent, ProfileImagesContent},
  data() {
    return {
      Tags: [
        {
          user_tag: "name",
          name: "Nombre",
        },
        {
          user_tag: "phone",
          name: "Contact Number",
        },
        {
          user_tag: "birthdayDate",
          name: "Date of birth",
        },
      ],
      user:{},
      responsiveOptions: [
        {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    };
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        console.log(this.user.name);
      }
    },
  },
}
</script>

<template>
  <div>
    <profile-images-content :name="user.name" :avatar="user.avatar" />
    <div class="flex flex-row pt-4" style="zoom: 1;">
      <div class="w-1/2 flex flex-col items-start w-full"> <!-- Añadida la clase w-full aquí -->

        <h3 class="pl-2.5 font-bold w-full flex justify-center">Personal Information</h3>
        <div class="w-full" v-for="tag in Tags" :key="tag.name ">
          <personal-info-card-content :name="user[`${tag.user_tag}`]" :tagName="tag.name" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>