<template>
  <div class="card">
    <div class="card-left">
      <div class="left-content">
        <img :src="foto" alt="Foto del trabajador" />
        <p>{{ `${nombre}` }}</p>
        <p class="blue-text">{{ `${rol}` }}</p>
      </div>
    </div>
    <div class="card-right">
      <div class="card-text">
        <p class="blue-text">{{ ` ${trabajoSolicitado}` }}</p>
        <p class="gray-text">{{ `Estado: ${estadoTrabajo}` }}</p>
      </div>
      <div class="button-container">
        <button class="green-button" @click="aceptar" :class="{ 'red-button': estadoTrabajo === 'pendiente' }">{{ `${estadoTrabajo}`  }}</button>
        <button class="blue-button" @click="rechazar" v-if="estadoTrabajo === 'completado'">Pagar</button>
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
    estadoTrabajo: String,
    foto: String,
  },
  methods: {
    aceptar() {
      if (this.estadoTrabajo === 'completado') {
        this.$emit('aceptar');
      }
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
  flex-direction: row;
  align-items: center;
}

.card-text{
  width: 50%;
}

.button-container {
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
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

.blue-button {
  background-color: #3C9BD0;
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
  flex-direction: row;
  align-items: center;
}

.card-text{
  width: 50%;
}

.button-container {
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
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