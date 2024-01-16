<template>
  <section class="bg-gray">
    <Header/>
    <div class=" bg-gray-100">
      <div class="mx-[120px] py-7">
        <div class="gap-3 flex">
          <RouterLink to="/"><img src="/icons/arrow-left.svg" alt=""/></RouterLink>
          <p class="sf font-bold text-[24px]">Talabani Qo'shish</p>
        </div>
      </div>
    </div>
    <div class="w-[790px] h-[402px] mx-auto bg-white mt-10 rounded-md">
      <div class="p-7">
        <div class="flex gap-7">
          <div>
            <label for="name" class="sf text-xs font-semibold uppercase">F.I.Sh. (Familiya Ism Sharif)</label>
            <Input placeholder="Abdullayev Abdulla Abdulla o’g’li" name="name" id="name"/>
          </div>
          <div>
            <label for="phone" class="sf text-xs font-semibold uppercase">Telefon raqam</label>
            <Input placeholder="00 000-00-00" name="phone" id="phone"/>
          </div>
        </div>
        <div class="flex flex-col mt-7">
          <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">OTM</label>
          <select v-model="All" @change="data" name="condition" id="condition"
                  class="w-full h-[42px] bg-gray px-3 rounded-md">
            <option v-for="option in data" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="mt-7 flex gap-7 justify-between">
          <div class="w-[400px]">
            <label for="typeOfStudent" class="py-1 font-semibold sf uppercase text-[12px]">Talabalik turi</label>
            <select v-model="All" @change="data" name="typeOfStudent" id="typeOfStudent"
                    class="w-full h-[42px] bg-gray px-3 rounded-md">
              <option v-for="option in data" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div>
            <label for="sum" class="py-1 font-semibold sf uppercase text-[12px]">Kontrakt summasi</label>
            <Input type="text" placeholder="Summani kiriting"/>
          </div>
        </div>
        <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
        <Button text-button="+ Qo'shish" class="px-8 float-right mt-5"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import Header from "../components/layout/Header.vue";
import Input from "../components/base/input/input.vue";
import Button from "../components/base/button/button.vue";
</script>
<script>
import {ref} from "vue";

export default {
  data() {
    return {
      All: ref("OTMni Tanlang"),
      data: [
        'OTMni Tanlang', "Bla", "Bla"
      ]
    }
  }
}
</script>