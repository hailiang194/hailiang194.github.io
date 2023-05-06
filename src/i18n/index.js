import Vue from 'vue'
import VueI18n from 'vue-i18n'
import date from '@/locales/format/date.json'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.lang || navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  dateTimeFormats: date,
  messages: {
    en: en, vi: vi
  }
})

if(!localStorage.lang)
{
  localStorage.lang = i18n.locale
}

export default i18n