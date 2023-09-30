<script >
import UsersProfileCardContent from "@/GeneralComponents/usersProfileCard-content.component.vue";
import PublishCardContent from "@/clients/FavoritesExpertsPage/components/publishCard-content.component.vue";

export default {
  name: "gridPublishCard-content",
  components: {PublishCardContent, UsersProfileCardContent},
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Crick",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 2,
          name: "0002",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 3,
          name: "0003",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 4,
          name: "0004",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 5,
          name: "0005",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 6,
          name: "0006",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 7,
          name: "0007",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 8,
          name: "0008",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 9,
          name: "0009",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 10,
          name: "0010",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 11,
          name: "0011",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
        {
          id: 12,
          name: "0012",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png"
        },
      ]
    };
  }

};

</script>

<template>
  <div class="grid-container">
    <div v-for="post in posts" :key="post.id">
      <div class="w-full">
        <publish-card-content
            :name="post.name"
            :avatar="post.avatar"
        ></publish-card-content>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
</style>