<template>
  <div class="p-card">
    <div class="p-card-title">{{ title }}</div>
    <div class="p-card-content">
      <!-- Contenido de la tarjeta -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.p-card {
  border-radius: 5px;
  padding: 1rem;
}

.p-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.p-card-content {
  /* .. */
}
</style>
