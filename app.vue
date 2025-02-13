<script setup lang="ts">
import { UButton } from '#components'
import { useColorMode } from '#imports'
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center gap-4">
    <p class="text-3xl">template - nuxt@3 - nuxt/ui</p>
    <UButton
      :icon="
        colorMode.value === 'dark'
          ? 'i-heroicons-moon-20-solid'
          : 'i-heroicons-sun-20-solid'
      "
      @click="toggleTheme"
    >
    </UButton>
  </div>
</template>
