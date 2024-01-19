<template>
  <div class="container my-5">
    <div class="text-center">
      <h1 class="display-4 text-center mb-3">Making API calls in Vue</h1>
      <div class="center">
        <div class="row">
          <div class="col-lg-6">
            <button v-on:click="onGet" class="btn btn-primary my-3">GET</button>
            <button v-on:click="onSimultaneous" class="btn btn-info">Concurrent requests</button>
            <button class="btn btn-danger"> Error Handling </button>
          </div>
          <!-- POST -->
          <div class="col-lg-6">
            <h2>Post</h2>
            <form @submit.prevent="onPost">
              <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="title" required/>
              </div>
              <div class="form-group">
                <label></label>
                <textarea class="form-control" v-model="body" required></textarea>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-primary">
                  Create Post
                </button>
                <button type="submit" class="btn btn-secondary">
                  Add with Custom Headers
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <hr />
    <div>
      {{ res }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      res: [],
    };
  },
  name: "App",
  methods: {
    // The get method called by the function
    onGet() {
      axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            console.log(response);
            // using stringify to beautify the output
            this.res = JSON.stringify(response.data);
          })
          .catch((errors) => {
            console.log(errors); // Errors
          });
    },
  },
};
</script>