<template>
    <!-- component -->
<div class="flex h-screen flex-shrink-0 w-64 flex-col justify-between bg-zinc-900 text-zinc-300">
  <div class="p-4">
    <!-- items -->
    <div class="mb-4">
      <div class="flex w-full items-center justify-between">
        <router-link to="/" class="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
          🏠
          <span class="ml-3 font-bold">Home</span>
        </router-link>
      </div>
    </div>
    <!-- item -->
    <div class="mb-4">
      <div class="flex w-full items-center justify-between">
        <router-link to="/list-of-books" class="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
       📗
          <span class="ml-3 font-bold">List of Books</span>
        </router-link>
      </div>
    </div>

    <div class="mb-4">
      <div class="flex w-full items-center justify-between">
        <router-link to="/create-book" class="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
          ➕
          <span class="ml-3 font-bold"> Create Book</span>
        </router-link>
      </div>
    </div>
  </div>

  
  <!-- Bottom -->
  <div class="flex items-center border-t-2 border-zinc-700 p-4">
    <img src="../../assets/images/default.png" alt="" class="h-12 w-12 rounded-full object-cover" />
    <a href="https://www.youtube.com/channel/UCZXcplsSliFfK3vGUjCKY2A" class="ml-2 text-sm" target="_blank">Yanick</a>
    <button class="ml-auto cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    </button>
  </div>
</div>
</template>