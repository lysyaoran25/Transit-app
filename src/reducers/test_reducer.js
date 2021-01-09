const test_reducer = (
  state = {
    count: 0,
  },
  action,
) => {
  switch (action.type) {
    case 'Add': {
      state = {
        ...state,
        count: state.count + 1,
      };
      break;
    }
    case 'Substract': {
      state = {
        ...state,
        count: state.count - 1,
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default test_reducer;
