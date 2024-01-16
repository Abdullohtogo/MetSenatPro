<template>
  <section class="bg-gray">
    <Header/>
    <div class=" bg-gray-100">
      <div class="mx-[120px] py-7">
        <div class="gap-3 flex">
          <RouterLink  to="/"><img src="/icons/arrow-left.svg" alt=""/></RouterLink>
          <p class="sf font-bold text-[24px]">Ishmuhammedov Aziz Ishqobilovich</p>
        </div>
      </div>
    </div>
    <div class="bg-white w-[793px] h-[326px] mx-auto mt-10 rounded-md">
      <div class="p-[32px]">
        <div class="justify-between flex">
          <h1 class="font-semibold text-[24px] sf">Homiy Haqida</h1>
          <EditButton text-button="Tahrirlash" @click="openModal"/>
        </div>
        <div class="mt-[32px]">
          <div>
            <div class="flex gap-4">
              <img src="/icons/user.png"/>
              <p class="font-semibold text-[16px] w-[163px] mt-2">Ishmuhammedov Aziz Ishqobilovich</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 mt-[24px]">
            <div class="flex flex-col gap-1">
              <p class="uppercase text-gray-300 text-[13px] font-semibold sf">telefon raqam</p>
              <p class="font-semibold text-[16px]">+998 99 973-72-60</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="uppercase text-gray-300 text-[13px] font-semibold sf">Homiylik summasi</p>
              <p class="font-semibold text-[16px]">30 000 000 UZS</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="uppercase text-gray-300 text-[13px] font-semibold sf">Tashkilot nomi</p>
              <p class="font-semibold text-[16px]">Orient Group Corporation</p>
            </div>
          </div>
        </div>
      </div>
      <Modal v-if="isModalOpen" @close="closeModal">
        <div class="mx-[28px] w-[586px]">
          <div class="flex justify-between">
            <h2 class="sf font-semibold text-[24px]">Tahrirlash</h2>
            <button @click="closeModal"><img src="/icons/x.svg" alt=""></button>
          </div>
          <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
          <div class="mt-[28px]">
            <button
                class="border-gray-200 border-[1px]"
                @click="activeTab = 'tab1'"
                :class="{ active: activeTab === 'tab1' }"
            >
              <div
                  class="px-[99px] text-[12px] py-[14px] font-normal uppercase"
                  :class="{
              active_button: activeTab === 'tab1',
              passive_button: activeTab !== 'tab1',
            }"
              >
                Jismoniy Shaxs
              </div>
            </button>
            <button
                class="border-gray-200 border-[1px]"
                @click="activeTab = 'tab2'"
                :class="{ active: activeTab === 'tab2' }"
            >
              <div
                  class="px-[99px] text-[12px] py-[14px] font-normal uppercase"
                  :class="{
              active_button: activeTab === 'tab2',
              passive_button: activeTab !== 'tab2',
            }"
              >
                Yuridik shaxs
              </div>
            </button>
          </div>
          <form class="mt-5" v-if="activeTab==='tab1'">
            <div class="pb-4">
              <label for="name" class="font-semibold sf uppercase text-[13px]">F.I.Sh (Familiya Ism Sharif)</label>
              <Input type="text" placeholder="Telefon Raqam" name="name" id="name"/>
            </div>
            <div>
              <label for="phone" class="mt-1 font-semibold sf uppercase text-[12px]">Telefon Raqam</label>
              <Input type="text" placeholder="Telefon Raqam" id="phone" name="phone"/>
            </div>
            <div class="flex flex-col mt-3">
            <label for="condition" class="py-2 font-semibold sf uppercase text-[12px]">Holati</label>
            <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
              <option v-for="option in data" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
            <div class="flex flex-col mt-4">
              <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Homiylik Summasi</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mt-4">
              <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Tulov turi</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
            <div class="mt-[28px] mb-2 gap-2.5 flex float-right">
              <Button @click="closeModal" class="px-[32px] py-[10px] sf" textButton="Saqlash"/>
            </div>

          </form>
          <form class="mt-5" v-if="activeTab==='tab2'">
            <div class="pb-4">
              <label for="name" class="font-semibold sf uppercase text-[13px]">F.I.Sh (Familiya Ism Sharif)</label>
              <Input type="text" placeholder="Telefon Raqam" name="name" id="name"/>
            </div>
            <div>
              <label for="phone" class="mt-1 font-semibold sf uppercase text-[12px]">Telefon Raqam</label>
              <Input type="text" placeholder="Telefon Raqam" id="phone" name="phone"/>
            </div>
            <div class="flex flex-col mt-3">
              <label for="condition" class="py-2 font-semibold sf uppercase text-[12px]">Holati</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mt-4">
              <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Homiylik Summasi</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mt-4">
              <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Tulov turi</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mt-4">
              <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Tashkilot Nomi</label>
              <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
                <option v-for="option in data" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
            <div class="mt-[28px] mb-2 gap-2.5 flex float-right">
              <Button @click="closeModal" class="px-[32px] py-[10px] sf" textButton="Saqlash"/>
            </div>

          </form>
        </div>
      </Modal>
    </div>
    <img src="/panelImg.png" alt="" class="w-[620px] mx-auto">
  </section>
</template>
<script setup>

import Header from "../components/layout/Header.vue";
import EditButton from "../components/base/button/editButton.vue";
import Button from "../components/base/button/button.vue";
import AllButton from "../components/base/button/allButton.vue";
import FilterButton from "../components/base/button/filterButton.vue";
import ButtonSecondary from "../components/base/button/buttonSecondary.vue";
import Input from "../components/base/input/input.vue";


</script>
<script>
import Modal from "../components/base/modal/modal.vue";
import {ref} from "vue";

export default {
  data() {
    return {
      isModalOpen: false,
      activeTab: 'tab1',
      All: ref("Barchasi"),
      data: [
        "Barchasi", "Tasdiqlangan", "Moderatsiyada", "Yangi"
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  components: {
    Modal,
  },
}
</script>