<template>
  <Header/>
  <section class="bg-gray-100 py-[24px]">
    <div class="mx-[120px] flex justify-between">
      <div class="flex rounded-md border-[0.5px] border-gray-200 w-[530px]">
        <button
          class="border-gray-200 border-[1px]"
          @click="activeTab = 'tab1'"
          :class="{ active: activeTab === 'tab1' }"
        >
          <span
            class="px-[54px] text-[12px] py-[14px] font-normal"
            :class="{
              active_button: activeTab === 'tab1',
              passive_button: activeTab !== 'tab1',
            }"
            >DASHBOARD</span
          >
        </button>
        <button
          class="border-gray-200 border-[1px]"
          @click="activeTab = 'tab2'"
          :class="{ active: activeTab === 'tab2' }"
        >
          <div
            class="px-[54px] text-[12px] py-[14px] font-normal"
            :class="{
              active_button: activeTab === 'tab2',
              passive_button: activeTab !== 'tab2',
            }"
          >
            HOMIYLAR
          </div>
        </button>
        <button
          class="border-gray-200 border-[1px]"
          @click="activeTab = 'tab3'"
          :class="{ active: activeTab === 'tab3' }"
        >
          <div
            class="px-[54px] text-[12px] py-[14px] font-normal"
            :class="{
              active_button: activeTab === 'tab3',
              passive_button: activeTab !== 'tab3',
            }"
          >
            TALABALAR
          </div>
        </button>
      </div>
      <div class="flex gap-5">
        <div class="">
          <label for="search" class="absolute translate-x-2 translate-y-2.5"><img src="/icons/search.svg" alt=""/></label>
          <Input type="search" placeholder="Izlash" class="px-8" name="search" id="search" v-model="searchQuery" @input="data"/>
        </div>
        <div>
          <button class="bg-gray-200 gap-1.5 flex rounded-md" @click="openModal">
            <img src="/icons/filter.svg" alt="" class="mt-[3px] py-[11px] pl-[32px]"/><span class="text-blue text-[16px] font-semibold sf pr-[32px] py-[10px]">filter</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-[120px]">
    <div v-if="activeTab === 'tab1'">
      <Dashboard />
    </div>
    <div v-if="activeTab === 'tab2'">
      <Sponsors />
    </div>
    <div v-if="activeTab === 'tab3'">
      <Students />
    </div>
  </section>

  <div v-if="activeTab === 'tab2'">
    <Modal v-if="isModalOpen" @close="closeModal">
      <div class="mx-[28px] w-[586px]">
        <div class="flex justify-between">
          <h2 class="sf font-semibold text-[24px]">Filter</h2>
          <button @click="closeModal"><img src="/icons/x.svg" alt=""></button>
        </div>
        <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
        <form>
          <div class="flex flex-col mt-3">
            <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Ariza Holati</label>
            <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
              <option v-for="option in data" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="mt-10">
            <p class="sf font-semibold pb-3 uppercase text-[12px]">Homiylik summasi</p>
            <div class="grid grid-cols-4 gap-2">
              <allButton/>
<!--              <div>-->
                <filterButton/>
<!--              </div>-->
            </div>
          </div>
          <div class="mt-10">
            <p class="sf font-semibold pb-3 uppercase text-[12px]">sana</p>
            <Input type="date" class="w-[250px]"/>
          </div>
          <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
          <div class="mt-[28px] mb-2 gap-2.5 flex float-right">
            <ButtonSecondary textButton="Tozalash"/>
            <Button @click="closeModal" class="px-[32px] py-[10px] sf" textButton="Natijalarni ko‘rish"/>
          </div>
        </form>
      </div>
    </Modal>
  </div>
  <div v-if="activeTab === 'tab3'">
    <Modal v-if="isModalOpen" @close="closeModal">
      <div class="mx-[28px] w-[586px]">
        <div class="flex justify-between">
          <h2 class="sf font-semibold text-[24px]">Filter</h2>
          <button @click="closeModal"><img src="/icons/x.svg" alt=""></button>
        </div>
        <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
        <form>
          <div class="flex flex-col mt-3">
            <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">Talabalik Turi</label>
            <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
              <option v-for="option in data" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mt-3">
            <label for="condition" class="py-1 font-semibold sf uppercase text-[12px]">OTM</label>
            <select v-model="All" @change="data" name="condition" id="condition" class="w-full h-[42px] bg-gray px-3 rounded-md">
              <option v-for="option in data" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="w-full border-gray-400 border-[.5px] h-[.5px] mt-[28px]"></div>
          <div class="mt-[28px] mb-2 gap-2.5 flex float-right">
            <ButtonSecondary textButton="Tozalash"/>
            <Button @click="closeModal" class="px-[32px] py-[10px] sf" textButton="Natijalarni ko‘rish"/>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>
<script setup>
import Dashboard from "../components/sections/Dashboard.vue";
import Sponsors from "../components/sections/Sponsors.vue";
import Students from "../components/sections/Students.vue";
import Header from "../components/layout/Header.vue";
import Input from "../components/base/input/input.vue";
import Button from "../components/base/button/button.vue";
import ButtonSecondary from "../components/base/button/buttonSecondary.vue";
import AllButton from "../components/base/button/allButton.vue";
import FilterButton from "../components/base/button/filterButton.vue";
</script>
<script>
import Modal from "../components/base/modal/modal.vue";
import {ref} from "vue";

export default {
  data() {
    return {
      searchQuery: '',
      isModalOpen: false,
      activeTab: 'tab1',
      All: ref("Barchasi"),
      data:[
        "Barchasi","Tasdiqlangan","Moderatsiyada","Yangi"
      ],
      buttons:[
          "1000000", "5000000", "7000000"
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
    filteredData() {
      // const query = this.searchQuery.toLowerCase();
      // return this.items.filter(item => item.toLowerCase().includes(query));
    },
  },
  computed:{
    filteredData() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter(item => item.toLowerCase().includes(query));
    },
  },
  components: {
    Modal,
  },
};
</script>
