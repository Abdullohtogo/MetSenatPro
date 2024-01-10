<template>
  <input :type="inputTypes" :placeholder="variant" :id="variant" :name="variant" class="w-full h-[42px] bg-gray px-3 rounded-md"/>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: 'text',
  },
})

const inputTypes = computed(()=>{
  const types={
    text:'text',
    password:'password',
    search:'search',
    select:'select',
    date:'date'
  }
  return types[props.variant]
})
</script>