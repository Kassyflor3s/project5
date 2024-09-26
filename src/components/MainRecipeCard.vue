<script setup>
import { faker } from '@faker-js/faker'

const recipeName = faker.commerce.productName();
const ingredients = Array.from({ length: 8 }, () => faker.food.ingredient());
const cookingTime = faker.number.int({ min: 10, max: 30 }) + " minutes";

</script>

<template>
  <RouterLink :to="{ name: 'CardDetails', params: { id: recipeName } }">
    <div class="border border-blue-400 rounded-xl shadow bg-blue-200 h-full">
      <img :src="faker.image.urlLoremFlickr({ category: 'food' })" class="rounded-t-xl object-cover w-full h-64" />
      <div class="p-6">
        <p class="mb-2 text-2xl font-bold text-center">{{ recipeName }}</p>
        <p class="mb-3 font-semibold text-gray-700 text-center">Cooking Time: {{ cookingTime }}</p>
        <p class="mb-3 font-serif text-gray-700 text-center">Ingredient: {{ ingredients }}</p>
      </div>
    </div>
  </RouterLink>
</template>
