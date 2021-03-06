import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'resources/translations/en.json'
import vi from 'resources/translations/vi.json'

const resources = {
  en: { translation: en },
  vi: { translation: vi },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
