<script >
import 'primeicons/primeicons.css';
export default {
  name: "expertCard-content"
}
</script>

<template >
  <div class="flex justify-center">
    <pv-card style="width: 40em ">
      <template #content >
        <ul class="flex row-auto">
          <li class="w-2/6 justify-items-end">
            <img class="h-full pr-3 rounded  " src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt="">
          </li>

          <li class=" w-3/6 ">
            <div class="h-1/2 text-[36px]  font-bold">
              <h1>Jose maria</h1>
            </div>
            <div class="h-1/2 flex items-center">
              <h2 class=" text-[24px] text-[#677294]"> Cliente</h2>
            </div>
          </li>

          <li class="w-1/6">
            <div class  ="h-2/3 flex justify-center">
              <i class="pi pi-heart" style="font-size: 2rem"></i>
            </div>
            <div class="h-1/3 flex justify-center">
              <p class="flex items-end">
                3 ofertas
              </p>
            </div>
          </li>
        </ul>
      </template>
    </pv-card>

  </div>
</template>

<style>


</style>