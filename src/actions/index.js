export const changeDate = date => ({
  type: "CHANGE_DATE",
  date
});

export const toggleShow = headliner => ({
  type: "TOGGLE_SHOW",
  headliner
});
export const selectDate = date => ({
  type: "SELECT_DATE",
  date
});
