export default (dispatch, action, ...args) => {
  return new Promise((resolve, reject) => {
    return dispatch(action({ resolve, reject }, ...args));
  });
};
