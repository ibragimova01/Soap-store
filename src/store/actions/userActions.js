export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN", user });
  };
};
export const logout = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT", user });
  };
};
