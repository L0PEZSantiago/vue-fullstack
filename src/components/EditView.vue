<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
// Récupérer le lien pour avoir l'id
const route = useRoute();

const cancel = () => {
    router.push('/list-of-books');  
}

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
onBeforeMount(async () => {
    const tryToFetch = await fetch(`http://localhost:3000/books/${route.params.bookId}`);
    const oneBook = await tryToFetch.json();
    refBook.value = oneBook;
    console.log(refBook.value)
})

const sendData = async () => {

    if (refBook.value.title === '' || refBook.value.author.firstName === '' || refBook.value.author.lastName === '' || 
    refBook.value.publicationYear === 0 || refBook.value.description === '' || refBook.value.genre === '' ) 
    {
        window.alert("Champs invalides. Vérifie le formulaire.");
        return;
    }
    
    try {
        const tryToFetch = await fetch(`http://localhost:3000/books/${route.params.bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(refBook.value)
        });
        
        // fetch NE jette PAS d’erreur (throw) tout seul quand il reçoit un code d’erreur HTTP (comme 404, 400, 500).
        //  Donc je dois vérifier les codes d’erreur et afficher un message d’erreur approprié.
        // response.ok → te dit si le status HTTP est dans la plage 200–299
        // response.status → te permet d’être précis sur le type d’erreur 
        if (!response.ok) {
            if (response.status === 400) {
                window.alert("Champs invalides. Vérifie le formulaire.");
            } else if (response.status === 404) {
                window.alert("Le livre n'existe pas.");
            } else if (response.status === 500) {
                window.alert("Erreur serveur. Réessaie plus tard.");
            } else {
                window.alert("Une erreur est survenue.");
            }
            return; // Ne continue pas l’exécution si erreur
        }

        window.alert("Le livre a bien été modifié");
        cancel();
    } catch (error) {
        console.log(error);
        window.alert("Une erreur est survenue lors de la modification");
    }
    // const data = await tryToFetch.json();
}

</script>

<template>
    <div class="p-8 rounded border border-gray-200 m-auto">
        <h1 class="font-medium text-3xl">Ajouter un livre</h1>
        <p class="text-gray-600 mt-6">Tu peux ajouter des livres à partir de ce formulaire.</p>

        <div class="mt-8 space-y-6">
            <!-- Titre -->
            <div>
                <label for="title" class="text-sm text-gray-700 block mb-1 font-medium">Titre</label>
                <input v-model="refBook.title" type="text" name="title" id="title" placeholder="Titre"
                    class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
            </div>

            <!-- Nom de l’auteur -->
            <div>
                <label for="authorFirstName" class="text-sm text-gray-700 block mb-1 font-medium">Nom de
                    l'auteur</label>
                <input v-model="refBook.author.firstName" type="text" name="authorFirstName" id="authorFirstName"
                    placeholder="Nom"
                    class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
            </div>

            <!-- Prénom de l’auteur -->
            <div>
                <label for="authorLastName" class="text-sm text-gray-700 block mb-1 font-medium">Prénom de
                    l'auteur</label>
                <input v-model="refBook.author.lastName" type="text" name="authorLastName" id="authorLastName"
                    placeholder="Prénom"
                    class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
            </div>

            <!-- Année de publication -->
            <div>
                <label for="publicationYear" class="text-sm text-gray-700 block mb-1 font-medium">Publié en</label>
                <input v-model="refBook.publicationYear" type="text" name="publicationYear" id="publicationYear"
                    placeholder="Année de publication"
                    class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
            </div>

            <!-- Genre -->
            <div>
                <label for="genre" class="text-sm text-gray-700 block mb-1 font-medium">Genre</label>
                <input v-model="refBook.genre" type="text" name="genre" id="genre" placeholder="Genre du livre"
                    class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
            </div>
        </div>

        <!-- Bouton -->
        <div class="space-x-4 mt-8">
            <button @click="sendData" type="submit"
                class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">
                Enregistrer
            </button>
            <button @click="cancel" type="button"
                class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                Annuler
            </button>
        </div>
    </div>
</template>


<style scoped>
input {
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    width: 60%;
}
</style>