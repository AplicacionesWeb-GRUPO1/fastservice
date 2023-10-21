  <script>
  export default {
    name: 'SideBar-content',
    props: {
      user: []
    },
    data() {
      return{
        roles:{
          Client:{
            backgroundColor: 'linear-gradient(to right, #3294EF, #07D9AD)',
            options: [
              { name: 'Home', icon: 'pi pi-home', link: '/home' },
              { name: 'Profile', icon: 'pi pi-user', link: '/profile' },
              { name: 'Publications', icon: 'pi pi-send', link: '/publications' },
              { name: 'Contracted Services', icon: 'pi pi-wrench', link: '/services' },
              { name: 'Notifications', icon: 'pi pi-bell', link: '/notifications' },
              { name: 'Payments', icon: 'pi pi-credit-card', link: '/payments' },
              { name: 'Log Out', icon: 'pi pi-sign-out', link: '/login' },
            ],
          },

          Expert:{
            backgroundColor: 'linear-gradient(to right, #EF3232, #90A2FF)',
            options: [
              { name: 'Home', icon: 'pi pi-home', link: '/home' },
              { name: 'Profile', icon: 'pi pi-user', link: '/profile' },
              { name: 'Works', icon: 'pi pi-briefcase', link: '/publications' },
              { name: 'Notifications', icon: 'pi pi-bell', link: '/notifications' },
              { name: 'Payments', icon: 'pi pi-credit-card', link: '/payments' },
              { name: 'Log Out', icon: 'pi pi-sign-out', link: '/login' },
            ],
          }
        }
      }
    }
  }
  </script>

  <template>
    <div class="sidebar" >
        <div class="side-menu" :style="{ background: roles['Expert'].backgroundColor }">
        <div class="profile-section">

          <a href="/profile">
            <img src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" alt="Profile Image" class="profile-image"/>
          </a>

          <div class="profile-info ">
            <div class="p rofile-name flex align-content-center">{{user.name}}</div>
          </div>

        </div>

        <ul class="p-0 " v-for="(option, index) in roles['Expert'].options" :key="option.name">
          <li class="nav-item flex justify-items-start ">
            <i :class="option.icon"></i>
            <a :href="option.link" class="nav-link ">{{ option.name }}</a>
          </li>

        </ul>
      </div>
    </div>
  </template>


  <style scoped>
  li{
    margin-bottom:20px;
  }
  .nav-item a{
    font-size: 1.7rem;
    display:flex;
    align-items: center;
  }
  .nav-item i{
    font-size: 2rem;
    display:flex;
    align-items: start;
    width: 20%;
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


  .profile-name {
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 5px;
  }

  .menu-list {
    list-style-type: none;
    padding: 10px;
  }
  .sidebar {
    position: fixed;
    width: 200px;
    color: black;
  }

  </style>