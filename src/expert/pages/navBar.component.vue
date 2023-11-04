<script>
export default {
  name: "navBar",
  props:{
    name: String,
    cellphone: String
  }
};
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-smoke header">
      <template #start>
        <h3>Encuentra lo que buscas</h3>
      </template>
      <template #center>
        <div class="search-bar">
          <i class="pi pi-search search-icon" />
          <pv-input-text placeholder="Search" class="search-input" />
        </div>
      </template>
      <template #end>
        <div class="end-content">
          <h3>FastService!</h3>
          <i class="pi pi-bars"></i>
          <br />
          <i class="pi pi-user" style="color: #708090"></i>
          <h3>{{name}}</h3>
        </div>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
.header {
  background-color: #f5f5f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  font-family: 'Poppins', sans-serif;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
}

.search-icon {
  font-size: 1rem;
  color: #999;
  margin-right: 10px;
}

.search-input {
  border: none;
  outline: none;
  flex: 1;
}

.end-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
