  <script>
  export default {
    name: 'SideBar-content',
    props: {
      user: {}
    },
    data() {
      return{
        roles:{
          client:{
            backgroundColor: 'linear-gradient(to right, #3294EF, #07D9AD)',
            options: [
              { name: 'Home', icon: 'pi pi-home', link: '/home' },
              { name: 'Profile', icon: 'pi pi-user', link: '/profile' },
              { name: 'Publications', icon: 'pi pi-send', link: '/publications' },
              { name: 'Contracted Services', icon: 'pi pi-wrench', link: '/clients/services' },
              { name: 'Notifications', icon: 'pi pi-bell', link: '/clients/notifications' },
              { name: 'Payments', icon: 'pi pi-credit-card', link: '/servicespayment' },
              { name: 'Log Out', icon: 'pi pi-sign-out', link: '/login' },
            ],
          },
          experto:{
            backgroundColor: 'linear-gradient(to right, #EF3232, #90A2FF)',
            options: [
              { name: 'Home', icon: 'pi pi-home', link: '/home' },
              { name: 'Profile', icon: 'pi pi-user', link: '/profile' },
              { name: 'Works', icon: 'pi pi-briefcase', link: '/publications' },
              { name: 'Notifications', icon: 'pi pi-bell', link: '/notifications' },
              { name: 'Payments', icon: 'pi pi-credit-card', link: '/servicespayment' },
              { name: 'Log Out', icon: 'pi pi-sign-out', link: '/login' },
            ],
          }
        }
      }
    },
    methods: {
      logout() {
        // Limpiar datos y cerrar sesión
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.$root.$data.onlogged = false;
        window.location.reload();
      }
    }
  }
  </script>

  <template>
    <div>
        <div class="side-menu" :style="{ background: roles[user.role].backgroundColor }">
        <div class="profile-section">

          <a href="/profile">
            <img :src="user.avatar" alt="Profile Image" class="profile-image"/>
          </a>

          <div class="profile-info font-bold ">
            <div class="p rofile-name flex align-content-center">{{user.name}}</div>
          </div>

        </div>

        <ul class="p-0" v-for="(option, index) in roles[user.role].options" :key="option.name">
          <li v-if="option.name !== 'Log Out'" class="">
            <router-link :to="option.link" class="flex justify-start align-items-start space-x-7 font-bold w-full">
              <i :class="option.icon" class="pt-0.5 side-icon font-black "></i>
              <p>{{ option.name }}</p>
            </router-link>
          </li>
          <li v-else >
            <router-link @click="logout" :to="option.link" class="flex justify-start align-items-start space-x-7 font-bold w-full">
              <i :class="option.icon" class="pt-0.5 side-icon font-black "></i>
              <p>{{ option.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>


  <style scoped>
  li{
    margin-bottom:20px;
  }

  .side-icon{
    font-size:1em;
  }

  .side-menu {
    width: 250px;
    padding: 20px;
    position: fixed;
    height: 100%;
  }

  .profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }


  </style>