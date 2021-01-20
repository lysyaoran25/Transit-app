const list_reducer = (
  state = {
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case 'GETDATA': {
      state.data = action.payload;
      break;
    }
    case 'FAILED': {
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default list_reducer;
