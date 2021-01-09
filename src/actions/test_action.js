export const TestAction = {
  ADD,
  SUBSTRACT,
};
function ADD() {
  return (dispatch) => {
    dispatch({type: 'Add'});
    return 1;
  };
}

function SUBSTRACT() {
  return (dispatch) => {
    dispatch({type: 'Substract'});
    return 2;
  };
}
