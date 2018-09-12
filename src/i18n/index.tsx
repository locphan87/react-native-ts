import I18n from 'react-native-i18n'

import en from './locales/en'
import vi from './locales/vi'

I18n.fallbacks = true
I18n.defaultLocale = 'en'
I18n.locale = 'en'
// choose a different default separator
// so it's allowed to use dots in i18n keys
I18n.defaultSeparator = '/'
I18n.translations = {
  en,
  vi
}

export default I18n
