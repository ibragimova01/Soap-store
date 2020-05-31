const initState = {
  users: [
    {
      id: 1,
      email: "admin@admin.com",
      pass: "123123",
      logged: false
    }
  ],
};

const logout = (user, state) => {
  const foundUser = state.users.find(u => u.email===user.email)
  console.log(foundUser, user)
  
    state = {
      ...state,
      users: state.users.map((item) => {
        item = { ...item };
        if (item.id === foundUser.id) {
          item.logged = false;
        }
        return item;
      }),
    };
  console.log(state)
  return state;
}


const login = (user, state) => {
  const foundUser = state.users.find(u => u.email===user.email)
  console.log(foundUser, user)
  if(foundUser.pass===user.pass) {
    state = {
      ...state,
      users: state.users.map((item) => {
        item = { ...item };
        if (item.id === foundUser.id) {
          item.logged = true;
        }
        return item;
      }),
    };
  }
  console.log(state)
  return state;
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = login(action.user, state);
      break;
    case "LOGOUT":
      state = logout(action.user, state);
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
