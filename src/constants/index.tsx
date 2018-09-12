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
  ZERO: 0
}
