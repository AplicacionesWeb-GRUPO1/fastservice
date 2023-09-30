<script>

import AppointmentButtonContent
  from "@/clients/ExpertsAppointmentsScreen/components/appointmentButton-content.component.vue";

export default {
  name: "showExpertsAppointment-content",
  components: {
    AppointmentButtonContent


  },
  data() {
    return {
      selectedButton: null
    };
  },
  methods: {
    selectButton(button) {
      this.selectedButton = button;
    }
  }
}

</script>

<template>
  <div class="button-container flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
    <appointment-button-content
        :title="'Ayer, 22 Nov'"
        :subtitle="'Ninguna cita programada'"
        :isActive="selectedButton === 'button1'"
        @click="selectButton('button1')"
    />
    <appointment-button-content
        :title="'Hoy, 23 Nov'"
        :subtitle="'Ninguna cita programada'"
        :isActive="selectedButton === 'button2'"
        @click="selectButton('button2')"
    />

    <appointment-button-content
        :title="'Jueves, 24 Nov'"
        :subtitle="'1 cita programada'"
        :isActive="selectedButton === 'button3'"
        @click="selectButton('button3')"
    />

  </div>
</template>




<style>

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}


</style>