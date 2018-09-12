import { combineReducers } from 'redux'

import app from '../modules/App/App.reducer'
import language from '../modules/Language/Language.reducer'

const reducer = combineReducers({
  language,
  app
})

export default reducer
