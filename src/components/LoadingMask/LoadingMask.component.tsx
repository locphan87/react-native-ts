import React, { SFC } from 'react'
import { ActivityIndicator } from 'react-native'

import { LoadingType } from '../../types'

import Components from './LoadingMask.component.style'

interface IProps {
  type?: LoadingType
}

const { Container } = Components
const LoadingMask: SFC<IProps> = ({ type, style }) => (
  <Container type={type} style={style}>
    <ActivityIndicator size="large" />
  </Container>
)

export default LoadingMask
