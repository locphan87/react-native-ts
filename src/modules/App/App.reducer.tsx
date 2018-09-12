import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import { updateStateByField } from '../../utils/redux.util'

const types = {
  SET_DEVICE_TOKEN: 'APP/SET_DEVICE_TOKEN',
  RESET: 'SETTING/RESET'
}
const actions = {
  reset: createAction(types.RESET),
  setDeviceToken: createAction(types.SET_DEVICE_TOKEN)
}

const initialState = {
  deviceToken: ''
}
const reducer = typeToReducer(
  {
    [types.SET_DEVICE_TOKEN]: updateStateByField('deviceToken'),
    [types.RESET]: () => initialState
  },
  initialState
)

export { actions }
export default reducer
