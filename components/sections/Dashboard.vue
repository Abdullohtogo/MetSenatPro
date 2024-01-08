<template>
  <section class="flex justify-between mt-[48px]">
    <div v-for="(dashboardItem, index) in dashboardItems" :key="index" class="flex bg-white p-[24px] gap-2.5 rounded-md">
      <img :src="dashboardItem.image" alt="">
      <div class="mr-[110px]">
        <p class="text-[12px] text-gray-300">{{dashboardItem.title}}</p>
        <p class="text-[20px] sf font-semibold">{{dashboardItem.sum}} <span class="text-gray-300 sf">UZS</span></p>
      </div>
    </div>
  </section>
  <div class="w-full bg-white mt-[28px]">
    <h2 class="pt-[24px] pl-[24px] text-[24px] sf font-semibold">Homiylar va Talabalar soni</h2>
  </div>
</template>
<script setup>
const dashboardItems = [
  {
    image: '/icons/moneyIconB.svg',
    title: 'Jami to‘langan summa',
    sum: '1 684 325 000',
  },
  {
    image: '/icons/moneyIconY.svg',
    title: 'Jami so‘ralgan summa',
    sum: '14 098 530 000',
  },
  {
    image: '/icons/moneyIconO.svg',
    title: 'To‘lanishi kerak summa',
    sum: '12 414 205 000',
  },
]
</script>