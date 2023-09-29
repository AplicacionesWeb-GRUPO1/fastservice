<script>
export default {
  name: "usersProfileCard-content",
  props: {
    name: String,
    rating: Number,
    cost: Number,
    avatar: String
  }
};
</script>
<template>
  <div class="p-card space-y-1" style="width: 150px;" >
    <div class="flex">
      <i class="pi pi-heart w-3/4" style="color: red; font-size: 2vw;"></i>
      <div class="flex space-x-2 justify-end">
        <i class="pi pi-star-fill" style="color: yellow; font-size: 2vw;"></i>
        <h1 class="text-bold text-black sm:text-[5px] lg:text-[19px]">{{ rating }}</h1>
      </div>
    </div>

    <img class="w-25 flex justify-center " :src="avatar" alt="Bordered avatar">
    <div class="flex justify-content-center">
      <h1>{{ name }}</h1>
    </div>

    <div class="flex justify-content-center">
      <h1 class="text-green-700">$</h1>
      <h2>{{ cost }}</h2>
    </div>
  </div>
</template>

<style >
.p-card {
  margin: 10px;
  padding: 10px
}
</style>
