<template>
  <section
    class="comming-soon-section"
  >
    <img
      src="@/assets/images/wizard.png"
      alt="Wizard"
      class="absolute left-[55%] translate-x-[-50%] bottom-[-200px] w-[220px] z-40 md:left-0 md:translate-x-0 md:bottom-0 md:w-[35%] md:z-10"
    />
    <div class="flex flex-col items-center z-20 pt-40 pb-12 md:pt-24">
      <h1
        v-html="t.title"
        class="font-playfair text-white text-5xl leading-[50px] md:text-[80px] md:leading-[88px] font-extrabold mb-8 text-center drop-shadow-lg"
      >
      </h1>
      <div class="flex flex-col items-center p-4">
        <div
          class="flex items-center justify-center space-x-4 w-full text-4xl bg-white rounded-2xl shadow-lg py-4 px-8 mb-8 lg:text-6xl lg:w-[756px] lg:h-[150px] lg:space-x-12"
        >
          <div class="flex flex-col items-center">
            <span class="font-playfair md:text-6xl font-extrabold">{{ days }}</span>
            <span class="text-xs md:text-base font-bold font-sans mt-2">{{
              t.countdown.days
            }}</span>
          </div>
          <span class="md:text-6xl mx-2">:</span>
          <div class="flex flex-col items-center">
            <span class="font-playfair md:text-6xl font-extrabold">{{ hours }}</span>
            <span class="text-xs md:text-base font-bold font-sans mt-2">{{
              t.countdown.hours
            }}</span>
          </div>
          <span class="md:text-6xl mx-2">:</span>
          <div class="flex flex-col items-center">
            <span class="font-playfair md:text-6xl font-extrabold">{{ minutes }}</span>
            <span class="text-xs md:text-base font-bold font-sans mt-2">{{
              t.countdown.minutes
            }}</span>
          </div>
          <span class="md:text-6xl mx-2">:</span>
          <div class="flex flex-col items-center">
            <span class="font-playfair md:text-6xl font-extrabold">{{ seconds }}</span>
            <span class="text-xs md:text-base font-bold font-sans mt-2">{{
              t.countdown.seconds
            }}</span>
          </div>
        </div>
        <p class="text-xs md:text-lg text-white text-center mb-6 max-w-xl">
          {{ t.description }}
        </p>
        <form class="w-full flex bg-white rounded-lg overflow-hidden shadow">
          <input
            type="email"
            :placeholder="t.emailPlaceholder"
            class="flex-1 px-4 py-3 outline-none"
          />
          <button type="submit" class="px-5 bg-white text-gray-900 font-bold">
            <VsxIcon iconName="ArrowRight" :size="24" color="black" type="linear" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comming-soon-section {
  background: url('@/assets/images/coming-soon-bg_pc.png') center/cover no-repeat;
  @apply top-[-1px] mb-60 md:mb-0 relative md:min-h-[988px] flex flex-col justify-center items-center font-montserrat;
}

@media (max-width: 768px) {
  .comming-soon-section {
    background: url('@/assets/images/coming-soon-bg_phone.png') center/cover no-repeat;
  }
}
</style>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { translations } from '@/locales'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLang])

const targetDate = new Date('2025-05-30T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer: ReturnType<typeof setInterval>

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff > 0) {
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((diff / (1000 * 60)) % 60)
    seconds.value = Math.floor((diff / 1000) % 60)
  } else {
    days.value = hours.value = minutes.value = seconds.value = 0
    clearInterval(timer)
  }
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
