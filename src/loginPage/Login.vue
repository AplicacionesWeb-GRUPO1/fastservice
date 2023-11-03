<template>
  <div id="app">
    <main>
      <div class="login-container">
        <Card title="Inicio de Sesión" class="login-card">
          <div>
            <InputText v-model="username" placeholder="Nombre de usuario" />
            <InputPasswordText v-model="password" placeholder="Contraseña" />
            <div class="forgot-password">
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="forgot-password">
              <a href="/forgot-password">Aún no tiene cuenta? Registrese aquí</a>
            </div>
            <Button @click="login">Login</Button>
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
    };
  },
  methods: {
    login() {
      // ...
    },
  },
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
  background-image: url('https://media.discordapp.net/attachments/1143002754432893131/1157483277892988998/login-background.jpg?ex=6518c5ce&is=6517744e&hm=d72ba5aab3484a058ac729cb1393e95ee3aac55aff4145752c663a0a24b32698&=&width=1001&height=676');
  background-size: cover;
}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 300px;
  padding: 1rem;
  margin-top: 12%;
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
</style>
