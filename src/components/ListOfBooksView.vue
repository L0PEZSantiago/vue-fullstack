<script setup>
import { ref } from "vue";
const apiURL = "http://localhost:3000/books";
const refBooks = ref([]);
const fetchItems = async () => {
  try {
    const response = await fetch(apiURL);
    refBooks.value = await response.json();
    console.log(refBooks.value);
  } catch (error) {
    console.log(error);
  }
};

fetchItems();
</script>

<template>
  
  <table class="text-center table mx-auto ">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>year</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="book in refBooks" class="mt-5 border border-slate-600 hover:bg-slate-600 hover:text-white hover:cursor-pointer">
          <td>{{ book._id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author.firstName }} {{ book.author.lastName }}</td>
          <td>{{ book.publicationYear }}</td> 
        </tr>
      </tbody>
  </table>
</template>