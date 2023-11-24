<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <nav class="navbar">
      <div class="brand">FastServices</div>
      <ul class="nav-links">
        <li><RouterLink to="/login" class="nav-link">Login</RouterLink></li>
        <li><RouterLink to="/signup" class="nav-link">Signup</RouterLink></li>
      </ul>
    </nav>
    <router-view></router-view>

  </div>
</template>

<style scoped>
/* Estilos para el navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  font-size: 24px;
}

.brand {
  font-size: 28px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
  margin-right: 15px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ffcc00;
}
</style>
