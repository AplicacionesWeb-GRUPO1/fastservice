<template>
  <div class="card">
    <div class="card-left">
      <div class="left-content">
        <img :src="foto" alt="Foto del trabajo" />
        <p>Responsable: {{ `${nombre}` }}</p>
        <p class="blue-text">{{ `${rol}` }}</p>
      </div>
    </div>
    <div class="card-right">
      <div class="card-text">
        <p class="gray-text"> Trabajo Solicitado: </p>
        <p class="blue-text">{{ ` ${trabajoSolicitado}` }}</p>
        <p class="gray-text"> En Progreso </p>
      </div>
      <button v-if="estadoTrabajo === 'terminado'" @click="aceptar">Pagar</button>
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
      this.$emit('aceptar');
    }
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
  width: 50%;
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

.blue-text {
  color: #3C9BD0;
  font-weight: bold;
}
.gray-text{
  color: #868686;
}

button {
  background-color: #3C9BD0;
  color: #fff;
  padding: 10px 15px;
  border: none;
  margin-left: 50px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #326e8a;
}
</style>