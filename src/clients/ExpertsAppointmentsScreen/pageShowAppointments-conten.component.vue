<script >




import ExpertCardContent from "@/clients/ExpertsAppointmentsScreen/components/expertCard-content.component.vue";
import ShowExpertsAppointmentContent
  from "@/clients/ExpertsAppointmentsScreen/components/showExpertsAppointment.component.vue";
import AppointmentsCardsContent
  from "@/clients/ExpertsAppointmentsScreen/components/appointmentsCards-content.component.vue";

export default {
  name: "pageShowAppointments-content",
  components: {AppointmentsCardsContent, ShowExpertsAppointmentContent, ExpertCardContent},
}
</script>

<template>
  <ul class="space-y-20 ">
    <li>
      <expert-card-content/>
    </li>

    <li>
      <show-experts-appointment-content/>
    </li>

    <li>
      <appointments-cards-content/>
    </li>

    <li class="flex flex-column items-center space-y-5">
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white button-exp font-bold py-2 px-4 rounded">
        PUBLICACIONES
        </button>
      </div>
      <h1>O </h1>
      <div>
        <button class="bg-white hover:bg-gray-300 text-[#3294EF]  button-exp py-2 px-4 border border-blue-500 ">
          CONTACTA A UN EXPERTO
        </button>
      </div>
    </li>

  </ul>



</template>


<style>
.button-exp {
  font-weight: bold;
  font-size: 18px;
  border-radius: 0.25rem; /* Borde redondeado */
}


</style>