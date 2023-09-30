<script>
import ProfileImagesContent from "@/clients/ClientProfilePage/components/profileImages-content.component.vue";
import PersonalInfoCardContent from "@/clients/ClientProfilePage/components/personalInfoCard-content.component.vue";
import {UserApiService} from "@/services/user-api.service";

export default {
  name: "clientProfile-page",
  components: {PersonalInfoCardContent, ProfileImagesContent},
  data() {
    return {
      Tags: [
        {
          user_tag: "name",
          name: "nombre",
        },
        {
          user_tag: "number",
          name: "Contact Number",
        },
        {
          user_tag: "birthday",
          name: "Date of birth",
        },
        {
          user_tag: "description",
          name: "Description",
        },
      ],
      user_info: [],
      newsApi: new UserApiService(),
      user:[],
    };
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      this.newsApi.getSources().then((response) => {
        this.user_info = response.data.user_info;
        console.log(response.data);
        this.user = this.user_info.user;
      });
    },
  },
}
</script>

<template>
  <div class="p-3">

    <profile-images-content  :name="user.name"/>
     <div v-for="tag in Tags" :key="tag.name">
        <personal-info-card-content
            :name="user[`${tag.user_tag}`]"
            :tagName="tag.name"
        />
     </div>
  </div>
</template>

<style >

</style>