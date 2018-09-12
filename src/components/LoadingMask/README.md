# LoadingMask

## LoadingView

Show a spinner conditionally inside the component instead of replacing the whole component

* USAGE

```js
import { LoadingType } from '../../types'

<View>
  <LoadingView loading={data.loading} type={LoadingType.INLINE}>
    <MyComponent />
  </LoadingView>
</View>
```
