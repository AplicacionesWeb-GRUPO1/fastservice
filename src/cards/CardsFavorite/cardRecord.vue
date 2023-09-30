<script>
import CardData from "@/cards/CardsFavorite/cardData.vue";
import PublishCardContent from "@/clients/FavoritesExpertsPage/publishCard-content.component.vue";
import UsersProfileCardContentComponent from "@/GeneralComponents/usersProfileCard-content.component.vue";
export default {
  name: "cardRecord",
  components: { PublishCardContent,CardData, UsersProfileCardContentComponent},
  data(){
    return{
      cards: [
        {
          id: 1,
          name: "John Murphey",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "AS10",
          numberJ: "2 Trabajos",
          percent: "87",
          appointment: "Siguiente Cita",
          date: "10:00 AM Hoy"
        },
        {
          id: 2,
          name: "Lola Lopez",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "BS09",
          numberJ: "3 Trabajos",
          percent: "59",
          appointment: "Siguiente Cita",
          date: "12:00 PM Hoy"
        },
        {
          id: 3,
          name: "Lola Lopez",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "BS09",
          numberJ: "3 Trabajos",
          percent: "59",
          appointment: "Siguiente Cita",
          date: "15:00 PM Hoy"
        },
        {
          id: 4,
          name: "Lola Lopez",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "BS09",
          numberJ: "3 Trabajos",
          percent: "59",
          appointment: "Siguiente Cita",
          date: "12:00 PM Mañana"
        },
        {
          id: 5,
          name: "Lola Lopez",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "BS09",
          numberJ: "3 Trabajos",
          percent: "59",
          appointment: "Siguiente Cita",
          date: "15:00 PM Mañana"
        },
        {
          id: 6,
          name: "Lola Lopez",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "BS09",
          numberJ: "3 Trabajos",
          percent: "59",
          appointment: "Siguiente Cita",
          date: "19:00 PM Mañana"
        },
        {
          id: 7,
          name: "Luke Whitesell",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "CS08",
          numberJ: "1 Trabajos",
          percent: "57",
          appointment: "Siguiente Cita",
          date: "15:00 PM En 2 dias"
        },
        {
          id: 8,
          name: "Luke Whitesell",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "CS08",
          numberJ: "1 Trabajos",
          percent: "57",
          appointment: "Siguiente Cita",
          date: "15:00 PM En 3 dias"
        },
        {
          id: 9,
          name: "Luke Whitesell",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "CS08",
          numberJ: "1 Trabajos",
          percent: "57",
          appointment: "Siguiente Cita",
          date: "15:00 PM En 5 dias"
        },
        {
          id: 10,
          name: "Silvia Mora",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "DS07",
          numberJ: "1 Trabajos",
          percent: "87",
          appointment: "Next Available",
          date: "10:00 AM Ayer"
        },
        {
          id: 11,
          name: "Silvia Mora",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "DS07",
          numberJ: "1 Trabajos",
          percent: "87",
          appointment: "Next Available",
          date: "08:00 AM Ayer"
        },
        {
          id: 12,
          name: "Silvia Mora",
          avatar: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png",
          code: "DS07",
          numberJ: "1 Trabajos",
          percent: "87",
          appointment: "Next Available",
          date: "07:00 AM Ayer"
        },
      ]
    };
  }
};
</script>

<template>
  <div class="grid-container">
    <div v-for="card in cards" :key="card.id">
      <div class="w-full">
        <card-data
            :name="card.name"
            :avatar="card.avatar"
            :code="card.code"
            :numberJ="card.numberJ"
            :percent="card.percent"
            :appointment="card.appointment"
            :date="card.date"
        ></card-data>
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