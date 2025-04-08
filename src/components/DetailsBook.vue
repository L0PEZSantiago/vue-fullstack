<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.id)
</script>

<template>

</template>