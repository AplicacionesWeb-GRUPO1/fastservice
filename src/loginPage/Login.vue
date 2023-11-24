<template>
  <div id="app">
    <main>
      <div class="login-container">
        <Card title="Inicio de Sesión" class="login-card">
          <div class="large-content">
            <InputText v-model="username" placeholder="Nombre de usuario" class="large-input" />
            <InputPasswordText v-model="password" placeholder="Contraseña" class="large-input" />
            <div class="forgot-password">
              <a href="/forgot-password" class="large-link">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="forgot-password">
              <a href="/forgot-password" @click.prevent="$router.push('/signup')" class="large-link">Aún no tiene cuenta? Regístrese aquí</a>
            </div>
            <Button @click="login" class="large-button">Login</Button>
          </div>
        </Card>
      </div>
    </main>
  </div>
</template>

<script>
import Card from "@/loginPage/components/Card.vue";
import Button from "@/loginPage/components/Button.vue";
import InputText from "@/loginPage/components/InputText.vue";
import InputPasswordText from "@/loginPage/components/InputPasswordText.vue";
import {AuthServiceApiService} from "@/services/AuthService-api.service";
import {BaseService} from "@/services/BaseService-api.service";
import {ExpertApiService} from "@/services/expert-api.service";
import {ClientApiService} from "@/services/client-api.service";

export default {
  components: {
    Card,
    Button,
    InputText,
    InputPasswordText
  },
  data() {
    return {
      username: "",
      password: "",
      authService: new AuthServiceApiService(),
    };
  },
  methods: {
    login() {
      console.log("Credentials: ", this.username, this.password);
      const credentials = {username: this.username, password: this.password};
      this.authService.getToken(credentials)
          .then(response => {
            const { token, ...userData } = response.data;
            console.log("token", token);
            console.log("userData", userData);
            localStorage.setItem("token", token);
            this.$root.$data.onlogged = true; // Modificar el estado de onlogged
            this.$router.push('/home');
          })
          .catch(error => {
            console.log(error);
          });
    },

  },
  saveToken(token){
    localStorage.setItem("token", token);
    const baseService = new BaseService();
    baseService.setAuthorizationHeader(token);
  },
  saveUser(rol, username){
    let service;

    if(rol === "expert"){
      service = new ExpertApiService();
    }else if(rol ==="client"){
      service = new ClientApiService();
    }

    this.$router.push('/home');
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

body {
  background-size: cover;
}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 600px;
  padding: 1rem;
  margin-top: 6%;
  font-size: 18px; /* Ajusta el tamaño del texto en todos los elementos dentro de la tarjeta */

}

.forgot-password {
  margin-top: 10px;
  margin-bottom: 10px;
}

.forgot-password a {
  color: #E53835;
  text-decoration: none;
  font-size: 10px;
}

.large-content {
  font-size: 18px; /* Ajusta el tamaño del contenido */
}

.large-input {
  font-size: 18px; /* Ajusta el tamaño del texto del input */
  padding: 15px; /* Ajusta el padding para aumentar el tamaño del input */
  margin-bottom: 20px; /* Espaciado inferior */
}

.large-link {
  font-size: 16px; /* Ajusta el tamaño del texto de los enlaces */
  margin-top: 10px; /* Espaciado superior */
}

.large-button {
  font-size: 18px; /* Ajusta el tamaño del texto del botón */
  padding: 15px 25px; /* Ajusta el padding para aumentar el tamaño del botón */
  margin-top: 20px; /* Espaciado superior */
}

</style>
