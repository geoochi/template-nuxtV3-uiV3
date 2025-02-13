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
  <ClientOnly>
    <div class="flex flex-col h-screen items-center justify-center">
      <p class="text-3xl">template - nuxt@3 - nuxt/ui</p>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
  </ClientOnly>
</template>
