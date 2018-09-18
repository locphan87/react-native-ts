const NOTHING = 'Nothing'

export default {
  NOTHING,
  NOOP: () => NOTHING,
  NOOP2: () => () => NOTHING,
  EMPTY: {
    STRING: '',
    OBJECT: {},
    ARRAY: []
  },
  ZERO: 0,
  BG_IMAGE:
    'https://cdn-images-1.medium.com/max/2000/1*WgiC7P0tNvtHMnhMztIO5Q.png'
}
