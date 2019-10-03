
export const setVisibilityFilter = date => ({
  type: 'CHANGE_START_DATE',
  date
})

export const toggleTodo = date => ({
  type: 'CHANGE_END_DATE',
  date
})

export const toggleShow = headliner => (
  {
  type: 'TOGGLE_SHOW',
  headliner
  }
)
