import * as React from 'react'
import { ActivityIndicator } from 'react-native'

import Components from './LoadingMask.component.style'

const { Container } = Components
const LoadingMask: React.SFC<any> = ({ style }) => (
  <Container style={style}>
    <ActivityIndicator size="large" />
  </Container>
)

export default LoadingMask
