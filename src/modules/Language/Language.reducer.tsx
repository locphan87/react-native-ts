import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import I18n from '../../i18n'

const types = {
  SET_LANGUAGE: 'LANGUAGE/SET_LANGUAGE'
}
const actions = {
  setLanguage: createAction(types.SET_LANGUAGE)
}

const initialState = I18n.currentLocale()
const reducer = typeToReducer(
  {
    [types.SET_LANGUAGE]: (state, { payload }) => payload
  },
  initialState
)

export { actions }
export default reducer
