<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-black/100' : 'bg-black/0',
    ]"
  >
    <div class="mx-auto flex items-center justify-between md:h-24 md:px-20">
      <NuxtLink to="#" class="flex items-center cursor-pointer">
        <img src="../assets/images/logo.svg" alt="Logo" class="h-10 md:h-16 m-4 md:m-0" />
      </NuxtLink>
      <button
        class="lg:hidden flex items-center justify-center text-white m-4"
        @click="showMobileMenu = true"
      >
        <VsxIcon iconName="HambergerMenu" :size="36" color="white" type="linear" />
      </button>
      <nav class="font-montserrat hidden lg:block">
        <ul class="flex space-x-16">
          <li>
            <NuxtLink
              to="#about_us"
              class="text-white font-semibold uppercase tracking-wide hover:text-primary"
            >
              {{ t.menu.about }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#games"
              class="text-white font-semibold uppercase tracking-wide hover:text-primary"
            >
              {{ t.menu.games }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#partners"
              class="text-white font-semibold uppercase tracking-wide hover:text-primary"
            >
              {{ t.menu.partners }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#contact_us"
              class="text-white font-semibold uppercase tracking-wide hover:text-primary"
            >
              {{ t.menu.contact }}
            </NuxtLink>
          </li>
          <li>
            <div class="relative">
              <div
                class="flex items-center space-x-2 cursor-pointer"
                @click="showDropdown = !showDropdown"
              >
                <img
                  :src="langs.find(l => l.code === currentLang)?.flag"
                  :alt="langs.find(l => l.code === currentLang)?.label"
                  class="h-6 w-8 object-cover rounded-sm"
                />
                <VsxIcon iconName="ArrowDown2" :size="24" color="white" type="bold" />
              </div>
              <!-- Overlay: click để ẩn dropdown -->
              <div
                v-if="showDropdown"
                class="fixed inset-0 z-40"
                @click="showDropdown = false"
              ></div>
              <!-- Dropdown -->
              <div
                v-if="showDropdown"
                class="absolute text-base right-0 mt-2 bg-white rounded-xl shadow-lg z-50 py-2 px-2"
              >
                <div
                  v-for="(lang, idx) in langs"
                  :key="lang.code"
                  class="flex items-center cursor-pointer hover:bg-blue-50 py-2 w-48"
                  :class="{ 'border-b border-gray-200': idx < langs.length - 1 }"
                  @click="selectLang(lang.code)"
                >
                  <span v-if="currentLang === lang.code" class="min-w-6 text-black mr-2 text-2xl">
                    <FontAwesomeIcon :icon="['fas', 'check']" />
                  </span>
                  <span v-else class="min-w-6 mr-2"></span>
                  <img :src="lang.flag" :alt="lang.label" class="w-10 rounded-sm mr-3" />
                  <span class="font-bold text-gray-900">{{ lang.label }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="showMobileMenu" class="fixed inset-0 bg-white z-[999] flex flex-col">
      <div class="flex justify-between items-center p-4">
        <div class="relative">
          <div
            class="flex items-center space-x-2 cursor-pointer bg-[#F6F6F6] border border-[#AFAFAF] rounded-md py-1 px-2"
            @click="showDropdown = !showDropdown"
          >
            <img
              :src="langs.find(l => l.code === currentLang)?.flag"
              :alt="langs.find(l => l.code === currentLang)?.label"
              class="w-8 object-cover rounded-sm"
            />
            <VsxIcon iconName="ArrowDown2" :size="20" color="black" type="bold" />
          </div>
          <div v-if="showDropdown" class="fixed inset-0 z-40" @click="showDropdown = false"></div>
          <div
            v-if="showDropdown"
            class="absolute text-md left-0 mt-2 bg-white border border-[#AFAFAF] rounded-xl z-50 py-2 px-2"
          >
            <div
              v-for="(lang, idx) in langs"
              :key="lang.code"
              class="flex items-center cursor-pointer hover:bg-blue-50 w-40"
              :class="{ 'border-b border-gray-200': idx < langs.length - 1 }"
              @click="selectLang(lang.code)"
            >
              <span v-if="currentLang === lang.code" class="min-w-4 text-black mr-2">
                <FontAwesomeIcon :icon="['fas', 'check']" />
              </span>
              <span v-else class="min-w-4 mr-2"></span>
              <img :src="lang.flag" :alt="lang.label" class="w-8 rounded-sm mr-3" />
              <span class="font-bold text-gray-900">{{ lang.label }}</span>
            </div>
          </div>
        </div>
        <button class="text-black text-4xl" @click="showMobileMenu = false">
          <FontAwesomeIcon :icon="['fas', 'xmark']" />
        </button>
      </div>
      <ul class="flex flex-col justify-center items-center mt-4">
        <li
          v-for="(item, idx) in [
            { to: '#about_us', label: t.menu.about },
            { to: '#games', label: t.menu.games },
            { to: '#partners', label: t.menu.partners },
            { to: '#contact_us', label: t.menu.contact },
          ]"
          :key="item.to"
          class="w-full flex items-center justify-center p-4 mx-2"
          :class="{ 'border-b border-gray-200': idx < 3 }"
        >
          <NuxtLink
            :to="item.to"
            class="leading-[40px] block text-center text-lg font-bold last:border-b-0"
            @click="showMobileMenu = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { translations } from '@/locales'

const languageStore = useLanguageStore()
const showDropdown = ref(false)
const { currentLang, langs } = storeToRefs(languageStore)

const t = computed(() => translations[languageStore.currentLang])

function selectLang(code: string) {
  languageStore.setLang(code)
  showDropdown.value = false
}

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  isScrolled.value = window.scrollY > 10
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const showMobileMenu = ref(false)
</script>
