<script setup>
import { onMounted, ref, onBeforeMount } from 'vue';

const refBooks = ref({});
let swiperInstance = null;

const apiURL = "http://localhost:3000/books";


const initSwiper = () => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
  swiperInstance = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}

const fetchItems = async () => {
  try {
    const response = await fetch(apiURL);
    refBooks.value = await response.json();
    
    if (refBooks.value.length > 1) {
      setTimeout(() => {
        initSwiper();
      }, 0); // petit délai pour s'assurer que le DOM est prêt
    }
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchItems();
})


</script>

<template>
	<section class="m-auto flex flex-col w-full h-fit items-center justify-center align-center">
<h1 class="text-center text-3xl font-bold mb-5">Bienvenue dans la bibliotheque</h1>

<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="book in refBooks" :key="book.id" class="swiper-slide "><img :src="book.coverUri" alt=""></div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</section>
</template>

<style scoped>
.swiper {
  width: 600px;
  height: 800px;
}

.swiper-slide {
  background-color: red;
}

img {
  width: 100%;
  height: 100%;
  background-size: contain;
}
</style>