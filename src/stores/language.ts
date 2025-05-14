import { defineStore } from 'pinia'
import usFlagUrl from '@/assets/images/flag_us.png'
import vnFlagUrl from '@/assets/images/flag_vn.png'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: 'en',
    langs: [
      { code: 'vi', label: 'Vietnamese', flag: vnFlagUrl },
      { code: 'en', label: 'English', flag: usFlagUrl },
    ],
  }),
  actions: {
    setLang(code: string) {
      this.currentLang = code
    },
  },
})
