import { View } from 'rnts-ui'
import { pathEq, propEq } from 'ramda'
import { branch, renderComponent } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const isDataLoading = pathEq(['data', 'loading'], true)
const isLoading = propEq('loading', true)
const withLoadingCreator = predicate =>
  branch(predicate, renderComponent(LoadingMask))
const withLoading = withLoadingCreator(isDataLoading)
const LoadingView = withLoadingCreator(isLoading)(View)

export { withLoadingCreator, LoadingView }
export default withLoading
