import { compose, setStatic } from 'recompose'

import HomeView from './Home.view'

const enhance = compose(
  setStatic('navigationOptions', {
    header: null
  })
)

export default enhance(HomeView)
