<template>
  <table class="w-full border-separate border-spacing-y-3 rounded-md mt-12">
    <thead>
    <tr>
      <th class="text-gray-400 font-semibold sf">#</th>
      <th class="text-gray-400 font-semibold sf">F.I.SH</th>
      <th class="text-gray-400 font-semibold sf">TEL.RAQAMI</th>
      <th class="text-gray-400 font-semibold sf">HOMIYLIK SUMMASI</th>
      <th class="text-gray-400 font-semibold sf">SARFLANGAN SUMMA</th>
      <th class="text-gray-400 font-semibold sf">SANA</th>
      <th class="text-gray-400 font-semibold sf">HOLATI</th>
      <th class="text-gray-400 font-semibold sf">AMALLAR</th>
    </tr>
    </thead>
    <tbody class="rounded-md" v-for="(item, index) in this.sponsors" :key="index" >
    <tr class="bg-white">
      <td class="text-center h-[70px]">{{item.id}}</td>
      <td class="text-center h-[70px]">{{ item.full_name }}</td>
      <td class="text-center h-[70px]">{{item.phone}}</td>
      <td class="text-center h-[70px]">{{item.sum}}</td>
      <td class="text-center h-[70px]">{{item.spent}}</td>
      <td class="text-center h-[70px]">{{item.created_at}}</td>
      <td class="text-center h-[70px]">{{item.condition}}</td>
      <td class="flex justify-center mt-6"><RouterLink class="" to="/customer"><img src="/icons/eyeIcon.svg" alt=""></RouterLink></td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      sponsors:[],
    };
  },
  mounted() {
    this.getSponsors();
  },
  methods:{
    getSponsors(){
      axios.get("https://club.metsenat.uz/api/v1/sponsor-list").then(res=>{
        this.sponsors=res.data.results
        console.log(this.sponsors)
      })
    }
  }
}
</script>