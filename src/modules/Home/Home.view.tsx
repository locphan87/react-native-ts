import { ENV } from 'env-config'
import { withTheme } from 'glamorous-native'
import React, { SFC } from 'react'
import { StatusBar } from 'react-native'
import { CenterView, ExpandView, Icon, Row, Text, View } from 'rnts-ui'

import Constants from '../../constants'
import I18n from '../../i18n'
import { ITheme } from '../../types'
import Components from './Home.view.style'

interface IProps {
  theme: ITheme
  ON_CHANGE_LANGUAGE(lang: string): () => void
  language: string
}

const getActiveStyle = isActive => ({
  color: isActive ? '#f5a623' : '#42436a',
  textDecorationLine: isActive ? 'underline' : 'none'
})
const { HeaderTitle, HeaderBackground } = Components
const HomeView: SFC<IProps> = ({
  ON_CHANGE_LANGUAGE,
  language,
  theme: { colors }
}) => (
  <ExpandView>
    <StatusBar hidden={true} />
    <View height={80} paddingHorizontal={20} justifyContent="center">
      <HeaderTitle>HOME</HeaderTitle>
      <HeaderBackground source={{ uri: Constants.BG_IMAGE }} />
    </View>
    <CenterView>
      <Text component="LabelText">{`ENV: ${ENV.toUpperCase()}`}</Text>
      <View marginBottom={8}>
        <Text component="NormalText">{I18n.t('home.view.welcome')}</Text>
      </View>
      <Row alignItems="center">
        <View marginRight={5}>
          <Icon name="ic_phone" size={24} color={'blue'} />
        </View>
        <Text component="NormalText" color={colors.cta} size={16}>
          Happy Coding!
        </Text>
      </Row>
    </CenterView>
    <Row justifyContent="center" paddingBottom={20}>
      <View marginRight={20}>
        <Text
          onPress={ON_CHANGE_LANGUAGE('en')}
          component="NormalText"
          size={16}
          style={getActiveStyle(language === 'en')}
        >
          {'EN'}
        </Text>
      </View>
      <View>
        <Text
          onPress={ON_CHANGE_LANGUAGE('vi')}
          component="NormalText"
          size={16}
          style={getActiveStyle(language === 'vi')}
        >
          {'VI'}
        </Text>
      </View>
    </Row>
  </ExpandView>
)

export default withTheme(HomeView)
