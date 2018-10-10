import { contains } from 'ramda'
import { StatusBar } from 'react-native'

import { isAndroid } from '../../utils/platform.util'
import Routes from './Navigation.constant'

const LightStatusBarRoutes = []
const NoStatusBarRoutes = [Routes.Home.Home]
const changeStatusBar = routeName => {
  StatusBar.setBarStyle('dark-content')
  StatusBar.setHidden(false)

  if (isAndroid()) {
    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
  }

  if (contains(routeName, LightStatusBarRoutes)) {
    StatusBar.setBarStyle('light-content')
  }
  if (contains(routeName, NoStatusBarRoutes)) {
    StatusBar.setHidden(true)
  }
}

export { changeStatusBar }
