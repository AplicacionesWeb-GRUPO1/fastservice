<script >
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
export default {
  name: "gridProfiles-content",
  components:{UsersProfileCardContent},
  props: {
    popular_experts: Array
  }
}

</script>

  <template>
      <div class="grid-container " >
      <div v-for="expert in popular_experts" :key="expert.id ">
          <div class="w-full">
          <users-profile-card-content
              :name="expert.name"
              :rating="expert.rating"
              :cost="expert.cost"
              :avatar="expert.avatar"
          ></users-profile-card-content>
        </div>
      </div>
    </div>
  </template>

<style >
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
</style>