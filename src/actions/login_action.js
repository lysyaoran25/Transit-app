import {LoginServices} from '../services/login_services';

export const LoginAction = {
  LOGIN,
};
function LOGIN(data) {
  return (dispatch) => {
    return LoginServices.login(data).then(function (response) {
      if (response.Status === 200) {
        dispatch(success('success', 1));
        return response;
      } else {
        dispatch(failed('failed'));
        return response;
      }
    });
  };
  function success(Status, ID) {
    return {type: 'LOGIN', status: Status, userid: ID};
  }
  function failed(Status) {
    return {type: 'FAILED', status: Status};
  }
}
