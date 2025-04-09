<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

// Récupérer le lien pour avoir l'id
const route = useRoute();
const refBook = ref({
    title: '',
    author: {
        firstName: '',
        lastName: ''
    },
    publicationYear: 0,
    coverUri: '',
    description: '',
    genre: '',
});


console.log(route.params.bookId);

// Créer son lien avec l'id récupéré afin de récupérer l'objet entier en json et l'injecter dans une ref
onBeforeMount (async() => {
    const tryToFetch = await fetch(`http://localhost:3000/books/${route.params.bookId}`);
    const oneBook = await tryToFetch.json();
    refBook.value = oneBook;
})

const sendData = async () => {
    const tryToFetch = await fetch(`http://localhost:3000/books/${route.params.bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(refBook.value)
    })
    const data = await tryToFetch.json();
}
</script>

<template>
<div class="flex flex-col bg-zinc-700 rounded-md border border-zinc-700 text-white p-10 h-fit m-auto">

    <div class="form-inputs flex flex-col gap-3 mb-5">

    <div class="form-title">
    <label  for="title">Titre : </label>
    <input  class="w-fit" type="text" name="title" id="title" placeholder="title" v-model="refBook.title">
    </div>  

    <div class="author flex gap-3 align-center items-center">
    <label for="authorFirstName">Nom de l'auteur : </label>
    <input type="text" name="authorFirstName" id="authorFirstName" placeholder="authorFirstName" v-model="refBook.author.firstName">  

    <label for="authorLastName">Prénom de l'auteur :</label>
    <input type="text" name="authorLastName" id="authorLastName" placeholder="authorLastName" v-model="refBook.author.lastName">
    </div>
    
    <div class="form-published-at">
    <label  for="title">Publié en : </label>
    <input  class="w-fit" type="text" name="title" id="title" placeholder="title" v-model="refBook.publicationYear">
    </div> 

    <div class="form-genre">
    <label  for="title">Genre : </label>
    <input  class="w-fit" type="text" name="title" id="title" placeholder="title" v-model="refBook.genre">
    </div>
</div>
    <button class="m-auto text-white bg-blue-600 p-3 border border-blue-600 rounded-md hover:bg-blue-500 cursor-pointer" @click="sendData">Enregistrer</button>
</div>


</template>

<style scoped>

input {
    border: 1px solid white ;
    padding: 10px;
    border-radius: 5px;
    width: 60%;
}
</style>