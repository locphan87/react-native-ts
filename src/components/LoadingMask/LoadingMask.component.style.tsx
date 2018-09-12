import glamorous from 'glamorous-native'

import { LoadingType } from '../../types'

const { FULLSCREEN } = LoadingType
const Components = {
  Container: glamorous.view(({ type = FULLSCREEN }) => {
    const extraProps =
      type === FULLSCREEN
        ? {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        : {}

    return {
      ...extraProps,
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
}

export default Components
