<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <title>template - nuxt@3 - nuxt/ui@3</title>
  <p class="text-3xl">template - nuxt@3 - nuxt/ui@3</p>
  <UButton
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    variant="ghost"
    @click="isDark = !isDark"
  />
  <NuxtLink to="/about">Link to About</NuxtLink>
  <UButton to="/about">Button to About</UButton>
</template>
