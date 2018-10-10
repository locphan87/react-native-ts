import { createStackNavigator } from 'react-navigation'

import Routes from '../Navigation.constant'
import { stackOptions } from '../Navigation.option'
import Screens from '../Navigation.screen'

const HomeStack = createStackNavigator(
  {
    [Routes.Home.Home]: Screens.Home
  },
  {
    initialRouteName: Routes.Home.Home,
    navigationOptions: stackOptions
  }
)

export default HomeStack
