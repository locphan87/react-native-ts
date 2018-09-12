import { is } from 'ramda'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import { persistConfig } from '../configs'
import { isDEV } from '../utils/platform.util'

import rootReducer from './reducer'

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  })
]
const enhancers = [applyMiddleware(...middleware)]
const getComposer = () => {
  if (!isDEV()) {
    return compose
  }
  if (!is(Object, window)) {
    return compose
  }
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: reduxDevToolsCompose } = window

  return reduxDevToolsCompose || compose
}
const composer = getComposer()

export default (initialValue = {}) => {
  const store = createStore(
    persistedReducer,
    initialValue,
    composer(...enhancers)
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
