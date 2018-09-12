import { ENV } from 'env-config'
import storage from 'redux-persist/lib/storage'

import appJSON from '../../app.json'

const {
  expo: { slug }
} = appJSON
// using different keys in multiple enviroments
const key = `${slug}-${ENV}`
const persistConfig = {
  key,
  storage,
  blacklist: []
}

export default persistConfig
