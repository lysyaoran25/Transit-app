import {API} from './api';

export const LoginServices = {
  GetData,
};

// our put method that uses our backend api
// to create new query into our data base*

function GetData(data) {
  let url = '/list';
  return API.get(url, data, {});
}
