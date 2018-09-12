import { fontello, fontMaps } from 'rnts-ui'
import { AppLoading, Font } from 'expo'
import React, { Component } from 'react'

const { font: iconPackFont, name: iconPackName } = fontello
const cacheIcons = () => Font.loadAsync({ [iconPackName]: iconPackFont })
const cacheFonts = () =>
  Object.values(fontMaps).map(font => Font.loadAsync(font))

const withAssetsLoading = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isReady: false
      }
    }

    public _setReady = () => this.setState({ isReady: true }) // tslint:disable-line
    public _cacheResources = () => Promise.all([cacheIcons(), ...cacheFonts()]) // tslint:disable-line

    public render() {
      if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._cacheResources}
            onFinish={this._setReady}
          />
        )
      }

      return <WrappedComponent {...this.props} />
    }
  }

export default withAssetsLoading
