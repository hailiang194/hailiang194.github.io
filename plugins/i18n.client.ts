import { ref } from 'vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Import locale files
  const en = await import('~/locales/en.json')
  const vi = await import('~/locales/vi.json')
  const zh = await import('~/locales/zh.json')
  const ja = await import('~/locales/ja.json')

  const messages = {
    en: en.default || en,
    vi: vi.default || vi,
    zh: zh.default || zh,
    ja: ja.default || ja
  }

  // Get saved locale from localStorage or default to 'en'
  let currentLocale = 'en'
  if (process.client) {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && messages[savedLang]) {
      currentLocale = savedLang
    }
  }

  // Create reactive locale
  const locale = ref(currentLocale)

  // Add i18n to the app
  nuxtApp.provide('i18n', {
    t: (key) => {
      const keys = key.split('.')
      let value = messages[locale.value]
      for (const k of keys) {
        if (value && value[k]) {
          value = value[k]
        } else {
          return key
        }
      }
      return value
    },
    locale: locale,
    setLocale: (newLocale) => {
      if (messages[newLocale]) {
        locale.value = newLocale
        if (process.client) {
          localStorage.setItem('lang', newLocale)
        }
      }
    }
  })

  // Make $t available globally
  nuxtApp.vueApp.config.globalProperties.$t = (key) => {
    const keys = key.split('.')
    let value = messages[locale.value]
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key
      }
    }
    return value
  }
})
