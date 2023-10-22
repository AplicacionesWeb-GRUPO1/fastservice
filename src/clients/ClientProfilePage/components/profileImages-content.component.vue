<script >
export default {
  name: "profileImages-content",
  props: {
    name: String
  }
}
</script>

<template >
  <div class="full BG_image relative ">
    <div class="flex justify-center items-center space-y-3  ">
      <img class="profile_img" src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png">
      <p class="pt-2 font-bold absolute top-100">{{name}}</p>
    </div>
  </div>

</template>

<style>
.BG_image{
  background-image: url("https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp");
  background-size: cover;
  background-blend-mode: multiply;
  width: 100%;
  height: 140px;
  margin-bottom:30px;
}

.profile_img{
  position: absolute;
  top: 16%;
  height: 140px;
}
</style>