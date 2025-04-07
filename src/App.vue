<script setup>
// docker compose build
// docker compose up -d
// Ces commandes en allant dans le dossier du projet et en lançant la commande.
// https://github.com/Thinkedou/Nest-Ts-Api

// import { ref } from "vue";
import { RouterView } from "vue-router";
import SlideBar from "./components/SidebarView.vue";
// const apiURL = "http://localhost:3000/books";
// const refBooks = ref([]);
// const fetchItems = async () => {
//   try {
//     const response = await fetch(apiURL);
//     refBooks.value = await response.json();
//     console.log(refBooks.value);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchItems();
</script>

<template>
  <main class="flex">
    <SlideBar/>
    
    <router-view></router-view>

</main>
</template>

<style scoped></style>
