import {ListService} from '../services/list_services';

export const ListAction = {
  GetData,
};
function GetData(data) {
  return (dispatch) => {
    return ListService.GetData(data).then(function (response) {
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
