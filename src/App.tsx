import ApolloClient from 'apollo-boost'
import { GRAPHQL_ENDPOINT, HIDE_WARNINGS } from 'env-config'
import { ThemeProvider } from 'glamorous-native'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { colors, fonts, size } from 'rnts-ui'

import withAssetsLoading from './hoc/withAssetsLoading/withAssetsLoading.hoc'
import Navigator from './modules/Navigation'
import createStore from './redux/createStore'

import { PersistGate } from 'redux-persist/integration/react'
import { onNavigationStateChange } from './modules/Navigation/Navigation.util'

if (HIDE_WARNINGS) {
  console.disableYellowBox = true // tslint:disable-line
}
if (__DEV__) {
  console.ignoredYellowBox = ['react-native-i18n module is not correctly link'] // tslint:disable-line
}

const { store, persistor } = createStore()
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT
})
const theme = {
  colors,
  fonts,
  size: {
    ...size,
    label: 12,
    normal: 14,
    medium: 16,
    title: 18
  }
}

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Navigator onNavigationStateChange={onNavigationStateChange} />
        </ApolloProvider>
      </PersistGate>
    </ThemeProvider>
  </Provider>
)

export default withAssetsLoading(App)
