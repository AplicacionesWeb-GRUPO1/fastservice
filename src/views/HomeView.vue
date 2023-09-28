<script>
export default {
  name: "app",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "About", to: "/about" },
        { label: "expertHome",to: "/expertHome" },
      ],
    };
  },
};
</script>
<template>
