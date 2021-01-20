import {API} from './api';

export const ListServices = {
  GetData,
};

// our put method that uses our backend api
// to create new query into our data base*

function GetData() {
  let url = '/getThongTinKhachHang';
  return API.get(url, {}, {});
}
