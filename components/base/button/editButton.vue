<template>
  <button class="py-2 px-8 bg-blue-100 text-[14px] font-semibold text-blue">{{ textButton }}</button>
</template>
<script setup>
const props = defineProps({
  textButton: {
    type: String,
    default: 'Button',
  },
})
</script>