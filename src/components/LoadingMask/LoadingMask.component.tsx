import React, { SFC } from 'react'
import { ActivityIndicator } from 'react-native'

import Components from './LoadingMask.component.style'

const { Container } = Components
const LoadingMask: SFC<any> = props => (
  <Container>
    <ActivityIndicator size="large" />
  </Container>
)

export default LoadingMask
