import I18n from '../../i18n'

export default {
  ON_CHANGE_LANGUAGE: ({ setLanguage }) => lang => () => {
    I18n.defaultLocale = lang
    I18n.locale = lang
    setLanguage(lang)
  }
}
