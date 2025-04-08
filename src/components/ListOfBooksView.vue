<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const apiURL = "http://localhost:3000/books";
const refBooks = ref([]);
const fetchItems = async () => {
  try {
    const response = await fetch(apiURL);
    refBooks.value = await response.json();
    // console.log(refBooks.value);
  } catch (error) {
    console.log(error);
  }
};

const goToDetailsHandler = (bookId)=>{
  console.log('go to details?', bookId)
  router.push({
    name:'details',
    params:{
      bookId
    }
  })
}

onBeforeMount(async() => {
  await fetchItems();
})
</script>

<template>
  
  <table class="text-center table mx-auto w-12/12 ">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>year</th>
        <th>Details</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="book in refBooks" class="mt-5 border border-slate-600 hover:bg-slate-600 hover:text-white hover:cursor-pointer">
          <td>{{ book._id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author.firstName }} {{ book.author.lastName }}</td>
          <td>{{ book.publicationYear }}</td>
          <td @click="goToDetailsHandler(book._id)">Details</td>
        </tr>
      </tbody>
  </table>
</template>

<style scoped>
td {
  padding: 10px;
  border: 1px solid black;
  background: #0000003a;
}


</style>