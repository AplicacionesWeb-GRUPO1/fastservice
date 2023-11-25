<script >
import {ExpertApiService} from "@/services/expert-api.service";

export default {
  name: "ClientPayments",
  data() {
    return {
      expert: [],
      newsApi: new ExpertApiService(),
      efectivo: true

    }
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      this.newsApi.getExperts().then((response) => {
        this.expert = response.data[0];
        console.log(response.data);
      });
    },
    seleccionarEfectivo() {
      this.efectivo = true;
    },
    seleccionarTarjetaCredito() {
      this.efectivo = false;
    }
  },
}
</script>

<template>
  <section class="flex  justify-center items-center pt-20">
      <pv-card class="paymentSection" style="
               width: 48em; position:relative; border-radius: 20px;">
        <template #title>
          <div class="title-container">
            <div class="avatar_img">
              <div class="cellPhone-number flex space-x-2">
                <i class="w-1/12 pi pi-phone pt-1"  style="color: black; font-size: 1rem"></i>
                <h3 class="flex justify-center">+51 {{expert.phone}}</h3>
              </div>
              <img :src="expert.avatar" style="width: 170px; height: 170px; border-radius: 100%;" />

            </div>

            <div class="text-tittle">
              <div class="text-content text-start space-y-1">
                <h1 style="margin-left: 50px;">
                  <snap style="color: red;">Plomero&nbsp; </snap>
                    {{ expert.name }}
                </h1>
                <h2 style="margin-left: 50px;">
                  Cumplió su trabajo, es hora de pagarle
                  <snap style="color: green;"> $32 </snap>
                  por su servicio!
                </h2>
                <hr class="flex items-center">
              </div>
            </div>
          </div>
        </template>
        <template #subtitle>
          <div class="sub-padding text-start">
            <div class="space-y-7">

              <h2 class="text-[#3294EF] font-bold">ELIGE TU MÉTODO DE PAGO</h2>
              <div>
                <hr>
                <div class="flex w-full align-middle pt-3 pb-3 font-black">
                  <i class="w-1/12 pi pi-money-bill"  style="color: green; font-size: 2rem"></i>
                  <h1 class="w-1/3 pt-1">Efectivo</h1>
                  <i class="pi pi-circle-on w-1/3 text-end w-full" :style="!efectivo ? 'color: #708090; font-size: 2rem; cursor: pointer;' : 'color: #ccc; font-size: 2rem;'" @click="seleccionarTarjetaCredito"></i>
                </div>
                <hr>
                <div class="flex w-full align-middle pt-3 pb-3 font-black">
                  <i class="w-1/12 pi pi-credit-card"  style="color: green; font-size: 2rem"></i>
                  <h1 class="w-1/3 pt-1">Tarjeta</h1>
                  <i class="pi pi-circle-on w-1/3 text-end w-full" :style="efectivo ? 'color: #708090; font-size: 2rem; cursor: pointer;' : 'color: #ccc; font-size: 2rem;'" @click="seleccionarEfectivo"></i>
                </div>
                <hr>
              </div>

            </div>
          </div>
        </template>
        <template #content class="p-0 m-0">
          <div class="flex justify-end p-10 m-0">

            <button class="
          bg-red-500 hover:bg-red-700 text-white
           font-bold px-20 py-3  rounded">
              Confirmar
            </button>
          </div>
        </template>
      </pv-card>
  </section>
</template>

<style >

.avatar_img {
  position: absolute;
  top: -12%;
  left: -10%;
  font-size: 1rem;
}

.sub-padding{
  padding-top: 70px;
}


.text-tittle  {
  font-family: "Rubik";
  font-weight: 600;
  font-size: 16px;
  padding-left: 20px; /* Establece el padding-left en 30px */

}
.title-container {
  display: flex;
  align-items: center;
}

.inner-circle {
  width: 10px;
  height: 10px;
  background-color: #708090;
  border-radius: 50%;
  margin-left: 10px; /* Espacio entre el ícono y la marca */
}

</style>