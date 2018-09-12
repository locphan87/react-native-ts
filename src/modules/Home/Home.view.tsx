import { withTheme } from 'glamorous-native'
import React, { SFC } from 'react'
import { CenterView, Icon, Row, Screen, Text, View } from 'rnts-ui'

import I18n from '../../i18n'

const HomeView: SFC<any> = ({ theme: { colors } }) => (
  <Screen>
    <CenterView>
      <Text component="LabelText">HOME</Text>
      <Text component="NormalText">{I18n.t('home.view.welcome')}</Text>
      <Row alignItems="center">
        <View marginRight={5}>
          <Icon name="ic_phone" size={24} color={'blue'} />
        </View>
        <Text component="NormalText" color={colors.cta}>
          Happy coding!
        </Text>
      </Row>
    </CenterView>
  </Screen>
)

export default withTheme(HomeView)
