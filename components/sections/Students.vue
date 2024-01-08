<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <!-- Add more headers as needed -->
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in displayedData" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <!-- Add more columns as needed -->
      </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      currentPage: ref(1),
      itemsPerPage: 10,
      data: [
        {
          id:'1',
          name:'qozi',
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
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    displayedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
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
  },
};
</script>
<style>
/* Add your custom styles here */
.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
}
</style>