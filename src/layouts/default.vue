<template>
  <Header />
  <main>
    <Loading v-if="isLoading" />
    <ScrollToTop />
    <slot />
  </main>
  <Footer />
</template>

<script setup>
import logoUrl from '~/assets/images/logo.svg'

const isLoading = ref(true)

onMounted(async () => {
  await nextTick()
  isLoading.value = false
})

useHead({
  title: 'ETECH',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: logoUrl,
    },
  ],
  meta: [
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'ETECH' },
    {
      property: 'og:description',
      content: 'ETECH - Game Studio, sáng tạo và phát triển game chất lượng.',
    },
    { property: 'og:image', content: 'https://phtsnh26.github.io/4tek-test/logo.png' },
    { property: 'og:url', content: 'https://phtsnh26.github.io/4tek-test/' },
    { property: 'og:site_name', content: 'ETECH' },
  ],
})
</script>
