import { compose, setStatic, withHandlers } from 'recompose'

import { withApp } from '../../hoc'
import I18n from '../../i18n'
import HomeView from './Home.view'

const handlers = {
  ON_CHANGE_LANGUAGE: ({ setLanguage }) => lang => () => {
    I18n.defaultLocale = lang
    I18n.locale = lang
    setLanguage(lang)
  }
}
const enhance = compose(
  setStatic('navigationOptions', {
    header: null
  }),
  withApp(),
  withHandlers(handlers)
)

export default enhance(HomeView)
