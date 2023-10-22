<script>
export default {
  name: "personalInfoCard-content",
  props: {
    name: String, // Propiedad para recibir el nombre
    tagName: String, // Propiedad para recibir tagName
  },
  data() {
    return {
      editMode: false,
      editedName: "",
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
      this.editedName = this.name;
    },
    saveName() {
      this.name = this.editedName; // Guarda el nombre editado
      this.editMode = false; // Sale del modo de edición
    },
  },
};
</script>

<template>
  <div class="p-card h-13">
    <div class="p-card-body p-0 m-0 border-0">
      <div class="flex justify-between">
        <div class="card-title ">{{ tagName }}</div>
        <button>
          <i class="pi pi-pencil " @click="toggleEditMode"></i>
        </button>
      </div>
      <div v-if="editMode" class="edit-name">
        <input  class="text-[#677294] " v-model="editedName" placeholder="Nuevo Nombre" @blur="saveName" @keyup.enter="saveName" />
      </div>
      <div v-else class="text-[#677294] edit-name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  font-weight: bold;
  color: #0EBE7F;
  font-size:12px;
}
.edit-name{
  width: 100%;
  display:flex;
  justify-content: start;
  font-size: 16px;
}


</style>
