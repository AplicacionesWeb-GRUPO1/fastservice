<template>
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon">
      <i class="pi pi-user"></i>
    </span>
    <input class="p-inputtext" :placeholder="placeholder" :type="inputType" :value="modelValue" @input="updateValue" />
    <span>
      <button class="p-button p-button-icon p-button-rounded p-button-sm p-button-info p-button-visible" @click="togglePasswordVisibility">
        <i :class="passwordVisible ? 'pi pi-eye' : 'pi pi-eye-slash'"></i>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    modelValue: String,
  },
  data() {
    return {
      inputType: "password",
      passwordVisible: false,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
      this.inputType = this.passwordVisible ? "text" : "password";
    },
  },
};
</script>

<style scoped>
.p-inputgroup {
  display: flex;
  align-items: center;
  margin-top: 10px;
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

.p-button-visible {
  visibility: visible !important;
}
</style>
