const login_reducer = (
  state = {
    userid: 0,
    username: '',
    status: '',
  },
  action,
) => {
  switch (action.type) {
    case 'LOGIN': {
      state = {
        ...state,
        status: action.status,
        userid: action.userid,
      };
      break;
    }
    case 'FAILED': {
      state = {
        ...state,
        status: action.status,
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default login_reducer;
