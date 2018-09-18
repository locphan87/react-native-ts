import glamorous from 'glamorous-native'
import { Title } from 'rnts-ui'

const Components = {
  HeaderTitle: glamorous(Title)({
    zIndex: 10,
    color: 'white'
  }),
  HeaderBackground: glamorous.image({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  })
}

export default Components
