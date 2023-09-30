<template>
  <button class="p-button p-button-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.p-button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.p-button-primary {
  background-color: #E53835;
  color: #fff;
}

.p-button-primary:hover {
  background-color: #0056b3;
}
</style>
