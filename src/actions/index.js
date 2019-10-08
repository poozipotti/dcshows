export const changeDate = date => ({
  type: "CHANGE_DATE",
  date
});

export const requestToggleShow = (headliner,currentlyTracked) => ({
  type: "REQUEST_TOGGLE_SHOW",
  headliner,
  currentlyTracked
});
export const toggleShow = headliner => ({
  type: "TOGGLE_SHOW",
  headliner
});
export const selectDate = date => ({
  type: "SELECT_DATE",
  date
});
