<template>
  <button
    class="bg-blue py-3 rounded-md"
  >
    <span class="text-white">
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