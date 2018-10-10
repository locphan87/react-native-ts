import { compose, setStatic, withHandlers } from 'recompose'

import { withApp } from '../../hoc'
import handlers from './Home.handler'
import HomeView from './Home.view'

const enhance = compose(
  setStatic('navigationOptions', {
    header: null
  }),
  withApp(),
  withHandlers(handlers)
)

export default enhance(HomeView)
