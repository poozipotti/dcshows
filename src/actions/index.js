
export const setVisibilityFilter = month => ({
  type: 'CHANGE_START_MONTH',
  month
})

export const toggleTodo = month => ({
  type: 'CHANGE_END_MONTH',
  month
})

export const toggleShow = headliner => (
  {
  type: 'TOGGLE_SHOW',
  headliner
  }
)
