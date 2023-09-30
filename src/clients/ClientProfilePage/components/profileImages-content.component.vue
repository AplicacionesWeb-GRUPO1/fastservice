<script >
export default {
  name: "profileImages-content",
  props: {
    name: String
  }
}
</script>

<template>
  <div class="flex justify-center w-full ">
    <pv-card class="asd w-full flex justify-center">
      <template #content class ="flex justify-center items-center" >
        <div class="space-y-3">
          <img class="h-40" src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png">
          <h1 class ="flex justify-center items-center text-[23px]"> {{name}}</h1>
        </div>
      </template>
    </pv-card>
  </div>

</template>

<style>
.asd{
  background-image: url("https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp");
  background-size: cover;
  background-blend-mode: multiply;
}
</style>