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

const login = (user, state) => {
  const foundUser = state.user.find(u => u.email===user.email)
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
  
  return state;
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = login(action.user, state);
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
