<script>
export default {
  name: "cardData",
  props: {
    name: String,
    avatar: String,
    code: String,
    numberJ: String,
    percent: String,
    appointment: String,
    date: String
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

      <h1>{{ name }}</h1>

    </div>
    <div class="flex justify-content-center">
      <h2>#</h2>
      <h2>{{code}}</h2>
    </div>
    <div class="flex justify-content-center">
      <h3>{{numberJ}}</h3>
    </div>
    <div class="flex justify-content-center">
      <h4>{{percent}}</h4>
      <h4>%</h4>
    </div>
    <div class="flex justify-content-center">
      <h5>{{appointment}}</h5>
    </div>
    <div class="flex justify-content-center">
      <h6>{{date}}</h6>
    </div>

    <div class="flex justify-left">
      <button class="flex justify-content-left item-left text-red-600">
        pendiente
      </button>
    </div>

  </div>
</template>

<style>

</style>