<template>
  <header class="bg-white">
    <div class="mx-[120px] flex justify-between">
      <RouterLink to="/"><img src="/proLogo.svg" alt="" class="mt-5"/></RouterLink>
      <div class="flex gap-[40px] my-3">
        <router-link to="/apicall">h</router-link>
        <button class="flex bg-gray rounded-md"><span class="py-[9px] pl-[20px] pr-[24px] sf font-semibold">Shohrux</span><img src="/icons/userIcon.svg" alt="" class="bg-green px-[4px] pt-[8px] pb-[2px] mt-1 mr-[4px] rounded-md"></button>
        <RouterLink to="/login">
          <button><img src="/icons/logout.svg" alt=""/></button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>