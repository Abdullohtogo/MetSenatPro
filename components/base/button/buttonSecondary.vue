<template>
  <button
      class="border-[1px] border-gray-300 py-3 px-[32px] rounded-md"
  >
    <span class="text-gray-300">
      {{ textButton }}
    </span>
  </button>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps({
  textButton: {
    type: String,
    default: 'Button',
  },
})

const text = ref('Button')
</script>