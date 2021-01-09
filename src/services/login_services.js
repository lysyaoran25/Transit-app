import { API } from './api';

export const LoginServices = {
    login,
};


// our put method that uses our backend api
// to create new query into our data base*

function login(data) {
    let url = '/categories'
    return API.get(url, data,{})
};