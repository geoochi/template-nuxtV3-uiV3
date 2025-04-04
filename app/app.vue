<script lang="ts" setup>
const colorMode = useColorMode()
// 确保初始值一致
colorMode.preference = 'system'
colorMode.value = 'system'

const togglePreference = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
const toggleValue = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
let colorValue = ref('')
onMounted(() => {
  colorValue = computed(() => colorMode.value)
})
</script>
<template>
  <UApp>
    <div class="flex flex-col items-center justify-center h-screen gap-4">
      <p>{{ colorMode }}</p>
      <div class="flex gap-4">
        <UButton variant="outline" :icon="colorMode.preference === 'light' ? 'i-lucide-sun' : 'i-lucide-moon'" />
        <UButton variant="outline" :icon="colorValue === 'light' ? 'i-lucide-sun' : 'i-lucide-moon'" />
      </div>
      <div class="flex gap-4">
        <UButton @click="togglePreference">Toggle Preference</UButton>
        <UButton @click="toggleValue">Toggle Value</UButton>
      </div>
      <NuxtPage />
    </div>
  </UApp>
</template>
