<template>
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon">
      <i class="pi pi-user"></i>
    </span>
    <input class="p-inputtext" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    modelValue: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.p-inputgroup {
  display: flex;
  align-items: center;
}

.p-inputgroup-addon {
  background-color: #f4f4f4;
  border: none;
  border-right: 1px solid #ccc;
  padding: 0.5rem;
}

.p-inputtext {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 4px 4px 0;
  font-size: 12px;
}
</style>

