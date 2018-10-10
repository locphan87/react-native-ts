import { pathEq } from 'ramda'
import { withAppCreator } from 'react-native-hocs'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'
import I18n from '../../i18n'
import { actions } from '../../modules/Language/Language.reducer'

const isDataLoading = pathEq(['data', 'loading'], true)
const mapStateToProps = state => ({
  language: state.language
})
const mapDispatchToProps = {
  setLanguage: actions.setLanguage
}

const withApp = params =>
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    lifecycle({
      componentWillMount() {
        const { language } = this.props
        // reset language state from storage
        I18n.defaultLocale = language
        I18n.locale = language
      }
    }),
    withAppCreator({
      LoadingComponent: LoadingMask,
      loadingPredicate: isDataLoading
    })(params)
  )

export { withApp }
