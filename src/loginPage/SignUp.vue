<template>
  <div id="app">
    <main>
      <div class="login-container">
        <Card title="Registro" class="login-card">
          <div class="large-content">
            <label class="input-label">Nombre</label>
            <InputText v-model="name" placeholder="Nombre" class="large-input" />
            <label class="input-label">Primer Apellido</label>
            <InputText v-model="lastName" placeholder="Apellido" class="large-input" />
            <label class="input-label">Nombre de Usuario</label>
            <InputText v-model="username" placeholder="Nombre de usuario" class="large-input" />
            <label class="input-label">Contraseña</label>
            <InputPasswordText v-model="password" placeholder="Contraseña" class="large-input" />
            <label class="input-label">Telefono</label>
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

              <Button @click="register" :disabled="isRegistering || !isValidForm" class="large-button">Registrarse</Button>
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
import { AuthServiceApiService } from "@/services/AuthService-api.service";
import SignUpData from "@/router/Auth";

const REQUIRED_FIELD_MESSAGE = "Todos los campos son obligatorios. Por favor, complete todos los campos.";
const INVALID_PHONE_MESSAGE = "El número de teléfono debe tener exactamente 9 dígitos.";

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
      isRegistering: false,
      isValidForm: false,
    };
  },
  watch: {
    name: "validateForm",
    lastName: "validateForm",
    username: "validateForm",
    password: "validateForm",
    phone: "validateForm",
    role: "validateForm",
  },
  methods: {
    register() {
      if (!this.isRegistering) {
        // Validación de campos obligatorios y número de teléfono
        if (!this.isValidForm) {
          alert(REQUIRED_FIELD_MESSAGE);
          return;
        }

        if (this.phone.length !== 9) {
          alert(INVALID_PHONE_MESSAGE);
          return;
        }

        // prefijo +51 Perú
        const formattedPhone = "+51" + this.phone;

        const signUpData = new SignUpData(
            this.name,
            this.lastName,
            this.username,
            this.password,
            formattedPhone,
            this.birthdayDate,
            this.role
        );

        console.log("datos de registro: ", signUpData);
        this.post(signUpData);
        this.isRegistering = true;
        this.$router.push('/login');
      }
    },

    post(signUpData) {
      console.log("Llamada a post");
      this.authService.createUser(signUpData)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    },

    validateForm() {
      this.isValidForm = !!(
          this.name &&
          this.lastName &&
          this.username &&
          this.password &&
          this.phone &&
          this.role
      );
    },
  },
};
</script>

<style>
.input-container {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.input-label {
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 15px;
  align-self: flex-start;
  font-size: 14px; 
}

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
</style>
