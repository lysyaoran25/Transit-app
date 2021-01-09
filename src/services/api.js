import axios from 'axios';
import config from '../../config';
var baseURL = config.API_SERVER;

export const API = {
  baseURL,
  get,
  post,
  del,
};

var defaultContentType = 'application/json; charset=utf-8';

var requestConfig = {
  url: '/',
  method: 'GET',
  baseURL: baseURL,
  headers: {
    common: {
      'Content-Type': defaultContentType,
      // 'Authorization': 'Bearer ' + token,
    },
  },
  params: {},
  data: {},
  dataType: 'json',
  timeout: 1500000,
  withCredentials: true,
  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // auth: {
  //     // username: 'admin@tinhvan.com',
  //     // password: 'Tinhvan@123'
  // },
  responseType: 'json', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status < 500;
  },
};

// function _setHeader() {
//     var loggedUser = JSON.parse(localStorage.getItem('user'));

//     if(loggedUser) requestConfig.headers.common['Authorization'] = 'Bearer ' + loggedUser.Access_token;
// }

function get(url, params = {}, data = {}, headers = null) {
  requestConfig.url = url;
  requestConfig.method = 'GET';
  requestConfig.params = params;
  requestConfig.data = data;
  requestConfig.responseType = 'json';

  // request header
  if (headers !== null) {
    requestConfig.headers.get = headers;
  }
  //_setHeader();

  return axios(requestConfig)
    .then(function (response) {
      if (response.data) {
        response.data.Status = response.status;
        return response.data;
      } else {
        return 'Please try again later';
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error.response.data', error.response.data);
        console.log('error.response.status', error.response.status);
        console.log('error.response.headers', error.response.headers);

        return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('error.request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }

      console.log('error.config', error.config);
      return error;
    });
}

function post(url, params = {}, data = {}, headers = null) {
  requestConfig.url = url;
  requestConfig.method = 'POST';
  requestConfig.params = params;
  requestConfig.data = data;
  requestConfig.responseType = 'json';

  // request header8
  if (headers !== null) {
    requestConfig.headers.post = headers;
  }
  //_setHeader();

  return axios(requestConfig)
    .then(function (response) {
      if (response.data) {
        response.data.Status = response.status;
        return response.data;
      } else {
        throw response;
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error', error);
        console.log('error.response.data', error.response.data);
        console.log('error.response.status', error.response.status);
        console.log('error.response.headers', error.response.headers);

        if (!error.response.data) error.response.data = {};
        error.response.data.Status = error.response.status;
        throw error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw error;
      }
    });
}

function del(url, params = {}, data = {}, headers = null) {
  requestConfig.url = url;
  requestConfig.method = 'DELETE';
  requestConfig.params = params;
  requestConfig.data = data;
  requestConfig.responseType = 'json';

  // request header
  if (headers !== null) {
    requestConfig.headers.post = headers;
  }
  //_setHeader();

  return axios(requestConfig)
    .then(function (response) {
      if (response.data) {
        response.data.Status = response.status;
        return response.data;
      } else {
        throw response;
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error.response.data', error.response.data);
        console.log('error.response.status', error.response.status);
        console.log('error.response.headers', error.response.headers);

        error.response.data.Status = error.response.status;
        throw error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw error;
      }
    });
}
