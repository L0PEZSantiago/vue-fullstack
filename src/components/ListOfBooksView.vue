<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from 'vue-router'
import ConfirmDelete from "./ConfirmDelete.vue";
const router = useRouter()

const apiURL = "http://localhost:3000/books";
const refBooks = ref([]);
const showModal = ref(false);
const bookToDelete = ref(0);

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
    name:'bookDetails',
    params:{
      bookId
    }
  })
}

onBeforeMount(async() => {
  await fetchItems();
})

// Je crée une fonction qui va lors du clique sur le delete, activer ma ref showModal, et transférer l'id du livre dans la ref bookToDelete
const confirmDelete = (bookId) => {
  // Ouvrir la modal
  showModal.value = true;
  console.log(showModal.value);
  // Transferer l'id du livre
  bookToDelete.value = bookId;
}

// Fermer la modale
const closeModal = () => {
  showModal.value = false;
  bookToDelete.value = null;
};

const deleteBook = async (bookId) => {
  if (!bookToDelete.value) return;
try {
  await fetch(`http://localhost:3000/books/${bookId}`, {
    method: 'DELETE',
  });
  await fetchItems(); // recharger la liste
  closeModal(); // fermer la modale
} catch (error) {
  console.log(error);
}
}
</script>

<template>
  
  <table class="text-center  w-12/12">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>year</th>
        <th>Details</th>
        <th>Actions</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="book in refBooks" class="mt-5 border border-slate-600  overflow-hidden">
          <td>{{ book._id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author.firstName }} {{ book.author.lastName }}</td>
          <td>{{ book.publicationYear }}</td>
          <td @click="goToDetailsHandler(book._id)"><button class="cursor-pointer text-white bg-blue-600 p-3 border border-blue-600 rounded-md hover:bg-blue-500">Details</button></td>
          <td class="flex gap-3 justify-center">
            <button class="action text-white bg-green-600 hover:bg-green-500" @click="router.push({name:'edit', params:{bookId:book._id}})">✏ Edit</button>
            <button @click="confirmDelete(book._id)" class="action text-white bg-red-500 hover:bg-red-400">❌ Delete</button>
          </td>
        </tr>
      </tbody>
  </table>

<!-- // PAS ça : on envoie l’action déjà faite
 deleteBook(bookToDelete); // → "Tiens, j'ai déjà fait le boulot"
/// MAIS ça : on envoie la recette pour faire le boulot plus tard
() => deleteBook(bookToDelete); // → "Tiens, fais ça quand tu voudras" -->
 <!-- Si je fais deleteBook(bookToDelete) il n'attendra même pas que la modal s'affiche et supprimera le livre -->
  <!-- Si je fais () => deleteBook(bookToDelete) il attendra que la modal s'affiche et supprimera le livre lors de la confirmation qui a un écouteur sur le bouton -->
  <ConfirmDelete v-if ="showModal" :onConfirm="() => deleteBook(bookToDelete)" :onCancel="closeModal" />
</template>

<style scoped>
td {
  padding: 10px;
}

.action {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}
</style>