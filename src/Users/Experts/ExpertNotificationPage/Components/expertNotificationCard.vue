<script setup>

</script>

<template>
  <div class="card">
    <div class="card-left">
      <div class="left-content">
        <img :src="foto" alt="Foto del trabajador" />
        <p>{{ `${rol}` }}</p>
        <p class="blue-text">Ver Perfil</p>
      </div>
    </div>
    <div class="card-right">
      <div class="first-line">
        <p class="blue-text">{{ `${nombre}` }}</p>
        <p>{{ `acepto el trabajo con descripcion de :` }}</p>
      </div>
      <br>
      <div class="first-line">
        <p class="blue-text">{{ ` "${trabajoSolicitado}"` }}</p>
        <p>{{ `al costo de` }}</p>
        <p class="blue-text">{{ `${precio}` }}$</p>
      </div>
      <p class="gray-text">{{ `${fechaNotificacion}` }}</p>
      <div class="button-container">
        <button class="green-button" @click="aceptar">Ok</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ExpertNotificationCard',
  props: {
    nombre: String,
    rol: String,
    trabajoSolicitado: String,
    precio: String,
    fechaNotificacion: String,
    foto: String,
  },
  methods: {
    aceptar() {
      this.$emit('aceptar');
    },
    rechazar() {
      this.$emit('rechazar');
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.card-left {
  flex: 2;
  display: flex;
}

.left-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-content img{
  width: 100px;
  height: 50%;
  border-radius: 50%;
}

.card-right {
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-right:50px;
}

.first-line{
  display: flex;
  flex-direction: row;
}

.first-line p{
  margin-right: 5px;
}

.button-container {
  display: flex;
  margin-top: 20px;
}

.green-button {
  background-color: #7BEE87;
  color: white;
  border: none;
  padding: 5px 50px;
  border-radius: 5px;
  cursor: pointer;
}

.red-button {
  background-color: #FB7971;
  color: white;
  border: none;
  padding: 5px 50px;
  border-radius: 5px;
  cursor: pointer;
}

.blue-text {
  color: #3C9BD0;
  font-weight: bold;
}
.gray-text{
  color: #868686;
}
</style>