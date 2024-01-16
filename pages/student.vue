<template>
  <section>
    <Header/>
    <div class=" bg-gray-100">
      <div class="mx-[120px] py-7">
        <div class="gap-3 flex">
          <RouterLink to="/"><img src="/icons/arrow-left.svg" alt=""/></RouterLink>
          <p class="sf font-bold text-[24px]">Isfandiyorov  Iqbol Bobomirzayevich</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Header from "../components/layout/Header.vue";
</script>