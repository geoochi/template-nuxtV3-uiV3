<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <title>template - nuxt@3 - nuxt/ui@3</title>
  <p class="text-3xl">template - nuxt@3 - nuxt/ui@3</p>
  <UButton
    :icon="$colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    variant="ghost"
    @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'"
  />
  <NuxtLink to="/about">Link to About</NuxtLink>
  <UButton to="/about">Button to About</UButton>
</template>
