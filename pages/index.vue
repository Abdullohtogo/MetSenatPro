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
          <Input type="search" placeholder="Izlash" class="px-8" name="search" id="search"/>
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
      <!-- Modal content goes here -->
      <h2>Sponsors Modal</h2>
      <p>This is the modal content.</p>
    </Modal>
  </div>
  <div v-if="activeTab === 'tab3'">
    <Modal v-if="isModalOpen" @close="closeModal">
      <!-- Modal content goes here -->
      <h2>Students Modal</h2>
      <p>This is the modal content.</p>
    </Modal>
  </div>
</template>
<script setup>
import Dashboard from "../components/sections/Dashboard.vue";
import Sponsors from "../components/sections/Sponsors.vue";
import Students from "../components/sections/Students.vue";
import Header from "../components/layout/Header.vue";
import Input from "../components/base/input/input.vue";
</script>
<script>
import Modal from "../components/base/modal/modal.vue";

export default {
  data() {
    return {
      isModalOpen: false,
      activeTab: 'tab1',
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
};
</script>
