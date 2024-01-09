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
      <div class="flex">
        <div class="">
          <label for="search" class="absolute translate-x-2 translate-y-2.5"><img src="/icons/search.svg" alt=""/></label>
          <Input type="search" placeholder="Izlash" class="px-8" name="search" id="search"/>
        </div>
        <button class="bg-gray-200 p-3 flex gap-2">
          <img src="/icons/filter.svg" alt=""/><span class="text-blue text-[14px] sf">filter</span>
        </button>
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
</template>
<script setup>
import Dashboard from "../components/sections/Dashboard.vue";
import Sponsors from "../components/sections/Sponsors.vue";
import Students from "../components/sections/Students.vue";
import Header from "../components/layout/Header.vue";
import Input from "../components/base/input/input.vue";
</script>
<script>
export default {
  data() {
    return {
      activeTab: 'tab1',
    }
  },
}
</script>
