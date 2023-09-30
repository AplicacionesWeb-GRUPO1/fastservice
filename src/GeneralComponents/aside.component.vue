  <template>
    <div class="side-menu">
      <div class="profile-section">
        <img src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" alt="Profile Image" class="profile-image"/>
        <div class="profile-info">
          <div class="profile-name">{{name}}</div>
          <div class="profile-phone"><i class="pi pi-phone"></i>123</div>
        </div>
      </div>
      <ul class="menu-list">
        <li><i class="pi pi-home"></i>Home</li>
        <li><i class="pi pi-users"></i>Mis Clientes</li>
        <li><i class="pi pi-upload"></i>Mis Publicaciones</li>
        <li><i class="pi pi-wallet"></i>Mis Pagos</li>
        <li><i class="pi pi-comments"></i>Chats</li>
        <li><i class="pi pi-wrench"></i>Herramientas</li>
        <li><i class="pi pi-cog"></i>Configuracion</li>
        <li><i class="pi pi-sign-out"></i>Logout</li>
      </ul>
    </div>
  </template>

  <script>
  import {UserApiService} from "@/services/user-api.service";

  export default {
    name: 'SideMenu',
    data() {
      return {
        user_info: [],
        newsApi: new UserApiService(),
        name: String,
        cellphone: String
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
          this.name= this.user_info.user.name;
          this.cellphone= this.user_info.user.number;

        });
      },
    },
  }
  </script>

  <style scoped>
  .side-menu {
    width: 250px;
    background: linear-gradient(to right, #9b59b6,#3498db);
    color: #fff;
    padding: 20px;
    height: 100%;
    position: fixed;
  }

  .profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
  }

  .profile-name {
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 5px;
  }

  .menu-list {
    list-style-type: none;
    padding: 10px;
  }

  .menu-list li {
    margin: 10px 0;
    cursor: pointer;
    transition: color 0.5s;
  }

  .menu-list li i {
    margin-right: 10px;
    margin-bottom: 20px;
  }

  .menu-list li:hover {
    color: #000000;
  }
  </style>
