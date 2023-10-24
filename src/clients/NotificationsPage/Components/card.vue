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
        <p>{{ `solicitó el trabajo de` }}</p>
      </div>
      <div class="first-line">
        <p class="blue-text">{{ ` "${trabajoSolicitado}"` }}</p>
        <p>{{ `a` }}</p>
        <p class="blue-text">{{ `${precio.toFixed(2)}` }}</p>
      </div>
      <p class="gray-text">{{ `${fechaNotificacion}` }}</p>
      <div class="button-container">
        <button class="green-button" @click="aceptar">Aceptar</button>
        <button class="red-button" @click="rechazar">Rechazar</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    nombre: String,
    rol: String,
    trabajoSolicitado: String,
    precio: Number,
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
}

.card-right {
  flex: 3;
  display: flex;
  flex-direction: column;

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