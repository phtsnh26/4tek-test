<template>
  <section id="partners" class="bg-[#F6F6F6] py-12">
    <div class="max-w-5xl mx-auto text-center mb-8">
      <h2 class="text-4xl font-playfair font-bold mb-2">{{ t.partnersSection?.title }}</h2>
    </div>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" class="mx-auto max-w-6xl">
      <Slide v-for="(partners, idx) in t.partnersSection?.partners" :key="idx">
        <div class="flex items-center justify-center h-16 w-44 lg:h-24 lg:w-64">
          <img :src="partners.imageUrl" class="max-h-20 object-contain" />
        </div>
      </Slide>

      <template #addons>
        <Navigation>
          <template #prev>
            <span class="bg-white shadow rounded-xl p-2">
              <VsxIcon iconName="ArrowLeft2" :size="20" type="linear" />
            </span>
          </template>
          <template #next>
            <span class="bg-white shadow rounded-xl p-2">
              <VsxIcon iconName="ArrowRight2" :size="20" type="linear" />
            </span>
          </template>
        </Navigation>
      </template>
    </Carousel>
  </section>
</template>

<style>
@media (min-width: 1025px) {
  .carousel__prev {
    left: -50px;
  }
  .carousel__next {
    right: -50px;
  }
}
</style>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { useLanguageStore } from '@/stores/language'
import { translations } from '@/locales'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLang] || translations.en)

const breakpoints = {
  0: { itemsToShow: 2 }, // Mobile
  600: { itemsToShow: 3 }, // Tablet
  1024: { itemsToShow: 5 }, // PC
}
</script>
