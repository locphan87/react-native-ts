import { createActions } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import I18n from '../../i18n'

const types = {
  SET_LANGUAGE: 'LANGUAGE/SET_LANGUAGE'
}
const actions = createActions(types.SET_LANGUAGE)

const initialState = I18n.currentLocale()
const reducer = typeToReducer(
  {
    [types.SET_LANGUAGE]: (state, action) => action.payload
  },
  initialState
)

export { actions }
export default reducer
