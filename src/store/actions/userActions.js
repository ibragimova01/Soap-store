export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN", user });
  };
};
