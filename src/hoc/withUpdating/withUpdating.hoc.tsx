import { colors } from 'rnts-ui'
import { equals } from 'ramda'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { compose, withProps, withState } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const withUpdating = WrappedComponent => ({ updating, ...rest }) => {
  const isUpdating = equals(true, updating)

  return (
    <View style={styles.container}>
      <WrappedComponent {...rest} />
      {isUpdating && <LoadingMask style={styles.updating} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  updating: {
    backgroundColor: colors.white,
    opacity: 0.7
  }
})

const simulatePending = (asyncFns, updateState = 'setUpdating') => props =>
  asyncFns.reduce((acc, key) => {
    acc[key] = async (...args) => {
      try {
        props[updateState](true)
        const response = await props[key](...args)
        props[updateState](false)

        return response
      } catch (err) {
        props[updateState](false)
        // catch should only process errors that
        // it knows and `rethrow` all others.
        throw err
      }
    }

    return acc
  }, {})

const withUpdatingConfig = updates =>
  compose(
    withState('updating', 'setUpdating', false),
    withProps(simulatePending(updates)),
    withUpdating
  )

export { withUpdating, simulatePending }
export default withUpdatingConfig
