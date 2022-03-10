<template>
  <h1>HomeView</h1>
  <v-alert type="success">I'm a success alert.</v-alert>
  <p>{{ dataModel.name }}</p>
  <p v-for="book in books" :key="book.id">{{ book.name }}</p>
</template>

<script>
import bookServices from "../services/books.service";
import BookModel from "../models/book.model";
export default {
  name: "HomeView",
  data() {
    return {
      books: [],
      dataModel: BookModel(),
    };
  },
  async mounted() {
    const response = await bookServices.getAllAsync();
    this.books = response;
  },
};
</script>
