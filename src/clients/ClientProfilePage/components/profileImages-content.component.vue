<script >
export default {
  name: "profileImages-content",
  props: {
    name: String,
    avatar: String,
  }
}
</script>

<template >
  <section class="full BG_image relative ">
    <div class="image-content space-y-1 ">
      <img class="profile_img" :src="avatar" alt="">
      <p class="font-bold absolute top-100">{{name}}</p>
    </div>
  </section>

</template>

<style>
.BG_image {
  background-image: url("https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp");
  background-size: cover;
  background-blend-mode: multiply;
  width: 100%;
  height: 140px;
  margin-bottom: 30px;
}

.profile_img {
  height: 160px;
  widht: 160px;
  border-radius: 50%; /* Hace que la imagen tenga forma de círculo */
  border: 3px solid white; /* Añade un borde blanco al círculo */
}

.image-content{
  position:absolute;
  align-content: center;
  display: flex;
  justify-content:center;
  top: 10%;
  left:40%;
}

</style>