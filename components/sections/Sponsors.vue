<template>
  <div>

    <table class="w-full ">
      <thead>
      <tr>
        <th>#</th>
        <th>F.I.SH</th>
        <th>TEL.RAQAMI</th>
        <th>HOMIYLIK SUMMASI</th>
        <th>SARFLANGAN SUMMA</th>
        <th>SANA</th>
        <th>HOLATI</th>
        <th>AMALLAR</th>
      </tr>
      </thead>
      <tbody class="">
      <tr v-for="item in displayedData" :key="item.id" class="px-[16px] bg-white py-[22px]">
        <td class="text-center">{{ item.id }}</td>
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">{{item.phone}}</td>
        <td class="text-center">{{item.donated}}</td>
        <td class="text-center">{{item.spent}}</td>
        <td class="text-center">{{item.date}}</td>
        <td class="text-center">{{item.condition}}</td>
        <td class=""><button class="w-[24px]"><img src="/icons/eyeIcon.svg" alt=""></button></td>
      </tr>
      </tbody>
    </table>
    <div class="flex justify-between">
      <div>
        <label for="itemsPerPage">Items per page:</label>
        <select v-model="itemsPerPage" @change="changeItemsPerPage">
          <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">&lt; Prev</button>
        <span>Page:</span>
        <input type="number" v-model="currentPage" @input="changePage" min="1" :max="totalPages" />
        <span>of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next &gt;</button>
        <span>| Showing {{ rangeStart }} - {{ rangeEnd }} of {{ totalItems }} items</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      currentPage: ref(1),
      itemsPerPage: ref(10),
      itemsPerPageOptions: [5, 10, 20], // Customize options as needed
      data: [
        {
          id:'1',
          name:'qozi',
          phone:'+99898989989',
          donated:'2000000',
          spent:'434333335',
          date:'3232332',
          condition:'new',
        },
        {
          id:'2',
          name:'qozi',
        },{
          id:'3',
          name:'qozi',
        },{
          id:'4',
          name:'qozi',
        },
        {
          id:'5',
          name:'qozi',
        },
        {
          id:'6',
          name:'qozi',
        },
        {
          id:'7',
          name:'qozi',
        },
        {
          id:'8',
          name:'qozi',
        },
        {
          id:'9',
          name:'qozi',
        },
        {
          id:'10',
          name:'qozi',
        },
        {
          id:'11',
          name:'qozi',
        },
      ], // Your data array
    };
  },
  computed: {
    totalItems() {
      return this.data.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
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
};
</script>
