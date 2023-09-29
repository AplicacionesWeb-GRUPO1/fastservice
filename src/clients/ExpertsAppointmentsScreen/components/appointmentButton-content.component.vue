<template>
  <button
      class="button"
      :class="{ active: isActive }"
      @click="selectButton"
  >
    <h1 class="text-lg font-bold mb-2">{{ title }}</h1>
    <h3 class="text-sm">{{ subtitle }}</h3>
  </button>
</template>

<script>
export default {
  name: "appointmentButton-content",
  props: {
    title: String,
    subtitle: String,
    isActive: Boolean
  },
  methods: {
    selectButton() {
      this.$emit('click');
    }
  }
};
</script>


<style >
:root {
  --button-bg: #ffffff;
  --button-text: #000000;
  --button-active-bg: #0E94BE;
  --button-active-text: #ffffff;
  --button-hover-bg: #0E94BE;
  --button-hover-text: #ffffff;
}

.button {
  width: 20rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.button.active {
  background-color: var(--button-active-bg);
  color: var(--button-active-text);
}

.button:hover {
  background-color: var(--button-hover-bg);
  color: var(--button-hover-text);
}
</style>