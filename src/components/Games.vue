<template lang="html">
  <section id="games" class="font-montserrat md:pb-32">
    <div class="mx-auto px-4 md:px-20 pb-[128px]">
      <h2 class="text-4xl md:text-5xl font-playfair font-bold text-center text-gray-900 mb-6">
        {{ t.gamesSection?.title }}
      </h2>
      <p class="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-12 md:mb-16">
        {{ t.gamesSection?.subtitle }}
      </p>

      <div class="grid-container gap-4 md:gap-6">
        <div
          v-for="(game, index) in t.gamesSection?.games"
          :key="game.id"
          :class="[
            'game-card relative rounded-xl overflow-hidden shadow-lg group w-full transition-transform duration-500',
            isDownPhone(index + 1) ? 'translate-y-[10%] lg:translate-y-0' : '',
            isDownPC(index + 1) ? 'lg:translate-y-[10%]' : '',
          ]"
        >
          <img
            :src="`images/games/${game.imageUrl}`"
            :alt="game.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            @error="handleImageError"
          />
          <div class="absolute inset-0 to-transparent p-2 lg:p-4 xl:p-8 flex flex-col justify-end">
            <h3 class="text-white text-2xl md:text-3xl font-montserrat font-bold mb-2">
              {{ game.title }}
            </h3>
            <p class="text-gray-300 text-xs md:text-sm leading-relaxed">
              {{ game.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
}

@media (max-width: 1023px) {
  .grid-container {
    grid-auto-flow: column;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language'
import { translations } from '@/locales'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLang] || translations.en)

const FALLBACK_IMAGE_URL = 'https://via.placeholder.com/300x450/CCCCCC/000000?Text=Image+Not+Found'

const isDownPC = (index: number) => {
  let i = 0
  while (index > 3) {
    index -= 3
    i++
  }
  return i % 2 !== 0
}

const isDownPhone = (index: number) => {
  let i = 0
  while (index > 6) {
    index -= 6
    i++
  }
  return i % 2 !== 0
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target) {
    target.src = FALLBACK_IMAGE_URL
  }
}
</script>
