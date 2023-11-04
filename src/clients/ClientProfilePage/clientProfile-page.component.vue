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
        {
          user_tag: "description",
          name: "Description",
        },
      ],
      user_info: null,
      newsApi: new ClientApiService(),
      user:[],
      publications:[],
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
      this.newsApi.getUsers().then((response) => {
        this.user = response.data[0];
        this.publications = response.data.user_info.publications;
        console.log(response.data);

      });
    },
  },
}
</script>

<template>
  <div>
    <profile-images-content :name="user.name" :avatar="user.avatar" />
    <div class="flex flex-row pt-4" style="zoom: 0.8;">
      <div class="w-1/3 flex flex-col items-start">
        <h3 class="pl-2.5 font-bold w-full flex justify-center">Personal Information</h3>
        <div class="w-full" v-for="tag in Tags" :key="tag.name ">
          <personal-info-card-content :name="user[`${tag.user_tag}`]" :tagName="tag.name" />
        </div>
      </div>

      <div class="w-2/3 flex flex-col items-start">
        <h3 class="pl-2.5 font-bold w-full flex justify-center">Trabajos</h3>
        <pv-carousel :value="user.work_img" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="pt-0.5">  
              <div class="p-2">
                <img :src="slotProps.data" class="w-full shadow-2" />
              </div>
            </div>
          </template>
        </pv-carousel>
      </div>
    </div>
  </div>
</template>




<style scoped>

</style>