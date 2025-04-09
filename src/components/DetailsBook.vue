<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const book = ref({});
console.log(route.params.bookId)

onBeforeMount(async() => {
    const tryToFetch = await fetch(`http://localhost:3000/books/${route.params.bookId}`);
    const oneBook = await tryToFetch.json();
    book.value = oneBook;
    // console.log(book.value)
})

</script>

<template>
        <!-- <router-link to="/list-of-books" class="cursor-pointer flex justify-center items-center align-center w-fit h-fit text-white bg-blue-600 p-3 border border-blue-600 rounded-md hover:bg-blue-500">Back</router-link> -->

    <div class="container m-auto w-fit h-fit bg-zinc-500 rounded-md border border-zinc-700 text-white p-10">

            <h1 class="text-center text-3xl font-bold mb-5">Book details</h1>
            <img class="mx-auto mb-5 " :src="book.coverUri" alt="">
        <p>{{ book.title }}</p>
        <p>{{ book.author?.firstName }} {{ book.author?.lastName }}</p> <!-- Pour éviter le undefined, on ajoute un ?. -->
        <p>{{ book.publicationYear }}</p>
    </div>
</template>