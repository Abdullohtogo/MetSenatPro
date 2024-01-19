<template>
  <button class="sf py-[16px] text-[14px] px-[32px]  font-semibold rounded-md flex gap-1 border-gray-200 border-[1px]">1000000<span class="sf text-[14px] text-blue">UZS</span></button>
</template>
<script>
export default{
  data(){
    return{
      active:'',
      buttons:[
        "1000000", "5000000", "7000000",
      ],
    }
  }
}
import {ref} from "vue";

// const props = defineProps({
//   textButton: {
//     type: String,
//     default: 'Button',
//   },
// })
//
// const text = ref('Button')
</script>