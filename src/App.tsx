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

if (HIDE_WARNINGS) {
  console.disableYellowBox = true // tslint:disable-line
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
          <Navigator />
        </ApolloProvider>
      </PersistGate>
    </ThemeProvider>
  </Provider>
)

export default withAssetsLoading(App)
