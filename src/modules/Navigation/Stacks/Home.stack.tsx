import { contains } from 'ramda'
import { StatusBar } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'

import { isAndroid } from '../../../utils/platform.util'
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
const defaultGetStateForAction = HomeStack.router.getStateForAction
const LightStatusBarRoutes = []
const NoStatusBarRoutes = [Routes.Home.Home]
const { BACK, NAVIGATE, INIT } = NavigationActions
const allowedActions = [INIT, NAVIGATE, BACK]

// TODO replace this by onNavigationChange
HomeStack.router.getStateForAction = (action, state) => {
  const { routeName, type } = action
  const newState = defaultGetStateForAction(action, state)

  if (!contains(type, allowedActions)) {
    return newState
  }

  StatusBar.setBarStyle('dark-content')
  StatusBar.setHidden(false)

  if (isAndroid()) {
    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
  }

  if (contains(routeName, LightStatusBarRoutes)) {
    StatusBar.setBarStyle('light-content')
  }
  if (contains(routeName, NoStatusBarRoutes) || type === INIT) {
    StatusBar.setHidden(true)
  }

  return newState
}

export default HomeStack
