<script >
import {UserApiService} from "@/services/user-api.service";

export default {
  name: "ServicesPayment-page",
  data() {
    return {
      expert: [],
      newsApi: new UserApiService(),
    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      this.newsApi.getSources().then((response) => {
        this.expert = response.data.user_info.publications[0];
        console.log(response.data);
      });
    },
  },
}
</script>

<template>
  <img class="avatar_img" :src="expert.avatar" />
  <pv-card class="pr-10px" style="width: 25em">
    <template #title> {{expert.name}}</template>
    <template #subtitle> cumplió con su trabajo</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
      <Button label="Danger" severity="danger" />

    </template>
    <template #footer>
    </template>
  </pv-card>
</template>

<style scoped>
.avatar_img{
  position:absolute;
  width:100px;
}
</style>