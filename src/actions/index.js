export const New_TIMER = "NEW_TIMER";
export const addTimer = (name) => {
  return {
    type: New_TIMER,
    payload: { name },
  };
};

export const SELECT_TIMER = "SELECT_TIMER";
export const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: { index },
  };
};
