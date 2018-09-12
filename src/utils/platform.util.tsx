import { equals } from 'ramda'
import { Platform } from 'react-native'

const isDEV = () => equals(process.env.NODE_ENV, 'development')
const isPROD = () => equals(process.env.NODE_ENV, 'production')
const isIOS = () => equals(Platform.OS, 'ios')
const isAndroid = () => equals(Platform.OS, 'android')

export { isDEV, isIOS, isAndroid, isPROD }
