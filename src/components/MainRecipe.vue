<script setup>
import MainRecipeCard from './MainRecipeCard.vue';

</script>

<template>
  <div class="grid grid-cols-3 gap-8 p-12">
    <MainRecipeCard v-for="recipe in 15" :key="recipe"></MainRecipeCard>
  </div>


</template>