<template>
  <Header/>
  <section class="bg-gray-100">
    <div class="mx-[120px]">
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
      <div></div>
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
