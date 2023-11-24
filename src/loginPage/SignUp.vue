<template>
  <div id="app">
    <main>
      <div class="login-container">
        <Card title="Registro" class="login-card">
          <div class="large-content">
            <InputText v-model="name" placeholder="Nombre" class="large-input" />
            <InputText v-model="lastName" placeholder="Apellido" class="large-input" />
            <InputText v-model="username" placeholder="Nombre de usuario" class="large-input" />
            <InputPasswordText v-model="password" placeholder="Contraseña" class="large-input" />
            <InputText v-model="phone" placeholder="Teléfono" class="large-input" />
            <Calendar v-model="birthdayDate" class="p-inputtext" :input-style-class="{'large-input': true}" placeholder="Fecha de nacimiento"></Calendar>

            <select v-model="role" class="large-input">
              <option value="expert">Experto</option>
              <option value="client">Cliente</option>
            </select>

            <Button @click="register" :disabled="isRegistering" class="large-button">Registrarse</Button>
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
import Calendar from 'primevue/calendar';
import {AuthServiceApiService} from "@/services/AuthService-api.service";
import SignUpData from "@/router/Auth";

export default {
  components: {
    Card,
    Button,
    InputText,
    InputPasswordText,
    Calendar
  },
  data() {
    return {
      name: "",
      lastName: "",
      username: "",
      password: "",
      phone: "",
      birthdayDate: null,
      role: "",
      authService: new AuthServiceApiService(),
      isRegistering: false, // Nuevo estado para controlar el registro
    };
  },
  methods: {
    register() {
      if(!this.isRegistering){
        const signUpData = new SignUpData(
            this.name,
            this.lastName,
            this.username,
            this.password,
            this.phone,
            this.birthdayDate,
            this.role
        );
        console.log("datos de registro: ", signUpData);
        this.post(signUpData);
        this.isRegistering = true; // Deshabilitar el botón mientras se realiza la solicitud
        this.$router.push('/login');
      }

    },

    post(signUpData){
      console.log("Llamada a post");
      this.authService.createUser(signUpData)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
    }
  },
};
</script>

<!-- Add your styles here -->
