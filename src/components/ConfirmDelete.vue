<script setup>
const props = defineProps({
    onConfirm: Function,
    onCancel: Function
})
</script>

<template>
<div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
<div class="mx-auto bg-white p-6 rounded">
      <h2 class="text-lg font-semibold mb-4">Confirmation de suppression</h2>
      <p class="text-gray-600">Etes-vous sur de vouloir supprimer ce livre ?</p>
      <div class="flex justify-end mt-4">
        <button @click="onConfirm" class="mr-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Oui</button>
        <button @click="onCancel" class="py-2 px-4 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Non</button>
      </div>
    </div>
</div>

</template>