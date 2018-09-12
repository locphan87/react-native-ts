import { isFunction, isNonEmptyArray } from 'ramda-adjunct'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Immutable from 'seamless-immutable'

import I18n from '../../i18n'
import { actions } from '../../modules/Language/Language.reducer'
import { insertIf } from '../../utils'
import renderWhen from '../renderWhen/renderWhen.hoc'
import withLoading, { withLoadingCreator } from '../withLoading/withLoading.hoc'
import withUpdating from '../withUpdating/withUpdating.hoc'

const mapStateToProps = state => ({
  language: state.language
})
const mapDispatchToProps = {
  setLanguage: actions.setLanguage
}

const withApp = ({
  loading = false,
  updates = [],
  renderWhen: renderWhenOptions = [],
  loadingPredicate // custom predicate for loading state
} = {}) => WrappedComponent => {
  const enhancers = Immutable([
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
    ...insertIf(
      loading && isFunction(loadingPredicate),
      withLoadingCreator(loadingPredicate)
    ),
    ...insertIf(loading && !isFunction(loadingPredicate), withLoading),
    ...insertIf(isNonEmptyArray(updates), withUpdating(updates)),
    ...insertIf(
      isNonEmptyArray(renderWhenOptions),
      renderWhen(renderWhenOptions)
    )
  ])

  return compose(...enhancers)(WrappedComponent)
}

export { mapStateToProps }
export default withApp
