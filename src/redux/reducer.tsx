import { combineReducers } from 'redux'

import language from '../modules/Language/Language.reducer'
import app from '../modules/App/App.reducer'

const reducer = combineReducers({
  language,
  app
})

export default reducer
