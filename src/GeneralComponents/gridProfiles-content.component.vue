<script >
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
export default {
  name: "gridProfiles-content",
  components:{UsersProfileCardContent},
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: "Crick",
          rating: 3.7,
          cost: 300.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        {
          id: 2,
          name: "Ejemplo Usuario 2",
          rating: 4.2,
          cost: 250.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        {
          id: 3,
          name: "Ejemplo Usuario 3",
          rating: 4.5,
          cost: 400.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        {
          id: 4,
          name: "Ejemplo Usuario 3",
          rating: 4.5,
          cost: 400.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        {
          id: 5,
          name: "Ejemplo Usuario 3",
          rating: 4.5,
          cost: 400.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        {
          id: 6,
          name: "Ejemplo Usuario 3",
          rating: 4.5,
          cost: 400.00,
          avatar: "https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png"
        },
        // Puedes agregar más perfiles de usuario aquí según sea necesario
      ]
    };
  }
}

</script>

  <template>
      <div class="grid-container " >
      <div v-for="profile in profiles" :key="profile.id ">
          <div class="w-full">
          <users-profile-card-content
              :name="profile.name"
              :rating="profile.rating"
              :cost="profile.cost"
              :avatar="profile.avatar"
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