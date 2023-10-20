<script setup>
const route = useRoute();

</script>

<template>
  <main class="flex-grow-1"> event id: {{ $route.params.id }}</main>
</template>