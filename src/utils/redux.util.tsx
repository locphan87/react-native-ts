const updateStateByField = fieldName => (state, { payload }) => ({
  ...state,
  [fieldName]: payload
})

export { updateStateByField }
