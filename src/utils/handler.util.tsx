const navigateToRoute = (navigation, routeName, params) => () => {
  navigation.navigate(routeName, params)
}

export { navigateToRoute }
