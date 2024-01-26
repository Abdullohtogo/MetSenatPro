<template>
  <div>



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
      <tbody class="rounded-md" v-for="(item, index) in displayedData" :key="item.id" >
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
    <div class="flex justify-between mb-10">
      <div>
        <label for="itemsPerPage">Items per page:</label>
        <select v-model="itemsPerPage" @change="changeItemsPerPage">
          <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <span>Page:</span>
        <input type="number" v-model="currentPage" @input="changePage" min="1" :max="totalPages" />
        <span>of {{ totalPages }}</span>
      </div>
      <div class="pagination flex">
        <div class="">
          <button v-if="currentPage===1" @click="prevPage" class="w-8 h-8 text-gray-600 rounded-md mr-4 bg-gray-500" :disabled="currentPage === 1">&lt;</button>
          <button v-if="currentPage!==1" @click="prevPage" class="w-8 h-8 text-gray-600 rounded-md mr-4 bg-white">&lt;</button>
          <button v-if="currentPage===totalPages" @click="nextPage" class="w-8 h-8 text-gray-600 rounded-md bg-gray-500" :disabled="currentPage === 1">&gt;</button>
          <button v-if="currentPage!==totalPages" @click="nextPage" class="w-8 h-8 text-gray-600 rounded-md bg-white">&gt;</button>
        </div>
        <span class="ml-3"> | Showing {{ rangeStart }} - {{ rangeEnd }} of {{ totalItems }} items</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "../base/button/button.vue";

let a=1;
</script>
<script>
import { ref, computed } from 'vue';
import axios from "axios";

export default {
  data() {
    return {
      currentPage: ref(1),
      itemsPerPage: ref(5),
      itemsPerPageOptions: [5, 10, 20], // Customize options as needed
      sponsors:[],
      data: [
        {
          id: '1',
          name: 'qozi',
          phone: '+99898989989',
          donated: 1000000,
          spent: '434333335',
          date: '3232332',
          condition: 'new',
        },
        {
          id: '2',
          name: 'qozi',
          phone: '+99898989989',
          donated: 5000000,
          spent: '434333335',
          date: '3232332',
          condition: 'new',
        }, {
          id: '3',
          name: 'qozi',
          phone: '+99898989989',
          donated: 2000000,
          spent: '434333335',
          date: '3232332',
          condition: 'new',
        }, {
          id: '4',
          name: 'qozi',
        },
        {
          id: '5',
          name: 'qozi',
        },
        {
          id: '6',
          name: 'qozi',
        },
        {
          id: '7',
          name: 'qozi',
        },
        {
          id: '8',
          name: 'qozi',
        },
        {
          id: '9',
          name: 'qozi',
        },
        {
          id: '10',
          name: 'qozi',
        },
        {
          id: '11',
          name: 'qozi',
        },
      ], // Your
    };
  },
  computed: {
    totalItems() {
      return this.sponsors.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sponsors.slice(start, end);
    },
    rangeStart() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    rangeEnd() {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.totalItems ? this.totalItems : end;
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    getSponsors(){
      axios.get("https://club.metsenat.uz/api/v1/sponsor-list").then(res=>{
        this.sponsors=res.data.results
        console.log(this.sponsors)
      })
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    changePage() {
      if (this.currentPage < 1) {
        this.currentPage = 1;
      } else if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    },
    changeItemsPerPage() {
      // Reset to the first page when changing items per page
      this.currentPage = 1;
    },
  },
  mounted() {
    this.getSponsors()
  }
};

</script>
