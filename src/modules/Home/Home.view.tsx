import { withTheme } from 'glamorous-native'
import React, { SFC } from 'react'
import { CenterView, Screen, Text } from 'rnts-ui'

import I18n from '../../i18n'

const HomeView: SFC<any> = ({ theme: { colors } }) => (
  <Screen>
    <CenterView>
      <Text component="LabelText">HOME</Text>
      <Text component="NormalText">{I18n.t('home.view.welcome')}</Text>
      <Text component="NormalText" color={colors.cta}>
        Happy coding!
      </Text>
    </CenterView>
  </Screen>
)

export default withTheme(HomeView)
