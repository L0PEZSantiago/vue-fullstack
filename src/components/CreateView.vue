<script setup>
import { ref } from "vue";
 
 // Je dois récupérer les valeurs du formulaire avec le v-model et les injecter dans un ref.
 const refBook = ref({
    title: '',
    author: {
        firstName: '',
        lastName: ''
    },
    publicationYear: 0,
    originalTitle: '',
    coverUri: '',
    description: '',
    genre: '',
    recap: ''
 });

// Pas besoin du onBefforeMount car l'objet est vide.

 // Je dois ensuite envoyer le ref au backend.
 const create = async () => {
     try {
        const response = await fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(refBook.value)
             // Je dois ensuite rediriger vers la page de liste des livres.
        }).then(() => {
            window.location.href = 'http://localhost:5173/list-of-books';
            window.alert('Le livre a bien été ajouté');
        })
     } catch (error) {
        console.log(error);
        // J'affiche un message d'erreur
        window.alert(error);
     }

     console.log(refBook.value);
 }


</script>


<template>
        <div class="p-8 rounded border border-gray-200 m-auto">
            <h1 class="font-medium text-3xl">Ajouter un livre</h1>
            <p class="text-gray-600 mt-6">Tu peux ajouter des livres à partir de ce formulaire.</p>
            <div class="form">
                <div class="mt-8 space-y-6">
                    <div> <label for="title" class="text-sm text-gray-700 block mb-1 font-medium">Titre</label> 
                        <input
                            v-model="refBook.title"
                            type="text" name="title" id="title"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Titre"/> 
                        </div>

                    <div> <label for="authorFirstName" class="text-sm text-gray-700 block mb-1 font-medium">Nom de l'auteur</label>
                        <input type="text" name="authorFirstName" id="authorFirstName"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Nom" v-model="refBook.author.firstName"/> 
                        </div>

                    <div> <label for="authorLastName" class="text-sm text-gray-700 block mb-1 font-medium">Prénom de l'auteur</label> 
                        <input
                            type="text" name="authorLastName" id="authorLastName"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Prénom" v-model="refBook.author.lastName"/> 
                        </div>

                    <div> <label for="description" class="text-sm text-gray-700 block mb-1 font-medium">Description</label> 
                        <textarea v-model="refBook.description" type="text" name="description" id="description" rows="5" cols="33" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            >
                            
                        </textarea> 
                    </div>

                    <div> <label for="image" class="text-sm text-gray-700 block mb-1 font-medium">Lien de l'image</label> 
                        <input 
                            v-model="refBook.coverUri"
                            type="text" name="image" id="image"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Lien de l'image" /> 
                        </div>

                        <div> <label for="genre" class="text-sm text-gray-700 block mb-1 font-medium">Genre</label> 
                        <input
                            v-model="refBook.genre"
                            type="text" name="genre" id="genre"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Genre du livre" /> 
                        </div>

                        <div> <label for="originalTitle" class="text-sm text-gray-700 block mb-1 font-medium">Titre original</label> 
                        <input
                            v-model="refBook.originalTitle"
                            type="text" name="originalTitle" id="originalTitle"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Titre original" /> 
                        </div>

                        <div> <label for="publicationYear" class="text-sm text-gray-700 block mb-1 font-medium">Date de publication</label> 
                        <input
                            v-model="refBook.publicationYear"
                            type="text" name="publicationYear" id="publicationYear"
                            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Date de publication" /> 
                        </div>
                </div>
                <div class="space-x-4 mt-8"> <button @click="create" type="submit"
                        class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
                    <!-- Secondary --> <button
                        class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </div>
            </div>
        </div>

</template>