<script>
export default {
  name: "publishCard-content",
  props: {
    name: String,
    avatar: String
  }
};
</script>

<template>
  <div class="p-card space-y-1" style="width: 150px;" >
    <div class="w-full flex justify-content-end">
      <i class="pi pi-heart" style="color: red; font-size: 2vw;"></i>
    </div>

    <div class=" flex items-center justify-center">
      <img class="w-5 " :src="avatar" alt="Bordered avatar">
    </div>
    <div class="flex justify-content-center">
      <h1>#</h1>
      <h1>{{ name }}</h1>
    </div>

    <div class="flex justify-center">
      <button class="flex justify-content-center item-center text-red-600">
        ver+
      </button>
    </div>

  </div>
</template>

<style >

</style>