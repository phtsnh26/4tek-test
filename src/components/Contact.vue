<template>
  <section id="contact_us" class="relative">
    <div class="absolute inset-0 w-full h-full">
      <img
        src="@/assets/images/footer-bg_pc.png"
        alt="footer bg"
        class="md:block hidden w-full h-full object-cover"
      />
      <img
        src="@/assets/images/footer-bg_phone.png"
        alt="footer bg"
        class="md:hidden block w-full h-full object-cover"
      />
    </div>
    <div
      class="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0"
    >
      <div>
        <img src="@/assets/images/logo.svg" alt="Logo" class="h-16 mb-6" />
        <div class="flex space-x-4 items-center">
          <a href="#" class="text-white text-2xl hover:text-primary">
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
          <a href="#" class="text-white text-2xl hover:text-primary">
            <FontAwesomeIcon :icon="['fab', 'square-facebook']" />
          </a>
          <a href="#" class="text-white text-2xl hover:text-primary">
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
      <div class="text-left text-white w-full lg:max-w-md">
        <h3 class="text-xl font-bold mb-4">{{ t.footer.addressTitle }}</h3>
        <div class="flex items-start mb-2">
          <VsxIcon iconName="Location" :size="32" color="white" type="bold" class="min-w-10" />
          <div class="flex flex-col space-y-2">
            <span>{{ t.footer.address1 }}</span>
            <span>{{ t.footer.address2 }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <VsxIcon iconName="Mobile" :size="32" color="white" type="bold" class="min-w-10" />
          <span>{{ t.footer.phone }}</span>
        </div>
      </div>
      <div class="text-left w-full lg:max-w-xs">
        <h3 class="text-xl font-bold mb-4 text-white">{{ t.footer.subscribeTitle }}</h3>
        <p class="text-white mb-4">{{ t.footer.subscribeDesc }}</p>
        <form class="flex bg-black/0 border border-white rounded-lg text-white">
          <input
            type="email"
            :placeholder="t.footer.subscribePlaceholder"
            class="flex-1 bg-black/0 px-4 py-2 rounded-l-lg outline-none"
          />
          <button type="submit" class="px-4">
            <VsxIcon iconName="ArrowRight" :size="24" color="white" type="linear" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { translations } from '@/locales'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLang])
</script>
