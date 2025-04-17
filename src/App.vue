<script setup>
import { RouterView } from "vue-router";
import SlideBar from "./components/SidebarView.vue";

</script>

<template>
  <main class="flex ml-64 py-10">
    
    <router-view></router-view>
    
  </main>
  <SlideBar/>
</template>

<style scoped></style>
