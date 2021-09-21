
// api wrapper => instance axios

import axios from 'axios';
import defaultOptions from './config'

axios.defaults.baseURL = defaultOptions.baseURL;
axios.defaults.headers = defaultOptions.headers;
axios.defaults.timeout = defaultOptions.timeout;

const service = {
  get,
  post,
  put,
  delete: _delete
};

async function get (url,params,headers) {
  let header = '';
  if (params) url += new URLSearchParams(params);
  if (headers) header = { headers: headers };
  return await axios.get(url,header).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error);
  })
}

async function post (url, body, headers) {
  let header = '';
  if (headers) header = { headers: headers };
  return await axios.post(url,body,header).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

async function put (url, body) {
  return await axios.put(url,body).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete (url,headers) {
  let header = '';
  if (headers) header = { headers: headers };
  return await axios.delete(url,header).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

// handler functions
function handleResponse (response) {
  if (response.status === 200) return response.data;
  return handleError(response);
}

// error handling
function handleError (response){
  // swagger'da api'lerin içerisinde error model'i göremediğim için responsu direk return ediyorum.
  // todo: herhangi bir handle işlemi yapılmadı.
  return response
}

export default service
