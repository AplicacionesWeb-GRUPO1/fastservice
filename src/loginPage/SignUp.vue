<template>
  <div id="app">
    <main>
      <div class="login-container">
        <Card title="Registro" class="login-card">
          <div class="large-content">
            <InputText v-model="name" placeholder="Nombre" class="large-input" />
            <InputText v-model="lastName" placeholder="Apellido" class="large-input" />
            <InputText v-model="userName" placeholder="Nombre de usuario" class="large-input" />
            <InputPasswordText v-model="password" placeholder="Contraseña" class="large-input" />
            <InputText v-model="phone" placeholder="Teléfono" class="large-input" />
            <div class="button-action">
              <div class="input-container">
                <Calendar v-model="birthdayDate" class="p-inputtext" :input-style-class="{'large-input': true}" placeholder="Fecha de nacimiento"></Calendar>
              </div>

              <div class="input-container">
                <select v-model="role" class="large-input">
                  <option value="expert">Experto</option>
                  <option value="client">Cliente</option>
                </select>
              </div>

              <Button @click="register" :disabled="isRegistering" class="large-button">Registrarse</Button>
            </div>
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
      userName: "",
      password: "",
      phone: "",
      birthdayDate: null,
      role: "",
      authService: new AuthServiceApiService(),
      isRegistering: false,
    };
  },
  methods: {
    register() {

      if (!this.isRegistering) {
        // Agregar el prefijo "+51" al número de teléfono
        const formattedPhone = "+51" + this.phone;
        const formattedBirthdayDate = this.formatDate(this.birthdayDate);

        const signUpData = new SignUpData(
            this.name,
            this.lastName,
            this.userName,
            this.password,
            formattedPhone, // Usar el número formateado
            formattedBirthdayDate,
            this.role
        );
        this.post(signUpData);
        this.isRegistering = true;
        this.$router.push('/login');
      }
    },
    post(signUpData){

      this.authService.createUser(signUpData)
          .then(response => {
            console.log("datos de registro: ", signUpData);
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
    },
    formatDate(date) {
      if (!date) return null;

      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');

      return `${day}/${month}/${year}`; // Formato DD/MM/AAAA
    },
  },
};
</script>

<style>
.large-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.input-container {
  flex: 1;
}

</style>