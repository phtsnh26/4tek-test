<template>
  <transition name="fade">
    <button @click="scrollToTop" class="fixed top-1/2 right-8 z-50 bg-white rounded-full p-2 shadow">
      <VsxIcon v-if="!isScrolled" iconName="ArrowDown2" :size="32" type="linear" />
      <VsxIcon v-else iconName="ArrowUp2" :size="32" type="linear" />
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  isScrolled.value = window.scrollY > 0
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
