import {ListServices} from '../services/list_services';

export const ListAction = {
  GetData,
};
function GetData() {
  return (dispatch) => {
    return ListServices.GetData().then(function (response) {
      console.log(response);
      if (response.Status === 200) {
        dispatch(success('success', response));
        return response;
      } else {
        dispatch(failed('failed'));
        return response;
      }
    });
  };
  function success(Status, payload) {
    return {type: 'GETDATA', payload: payload};
  }
  function failed(Status) {
    return {type: 'FAILED'};
  }
}
