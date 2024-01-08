<template>
  <button
    class="bg-blue py-3 rounded-md"
  >
    <span class="text-white">
      {{ text }}
    </span>
  </button>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
})

const text = ref('Button')
</script>