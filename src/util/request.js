/*
 * @Author: XuWenKang
 * @Description: request
 * @Date: 2018-04-13 13:47:50
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 14:41:01
*/

import 'whatwg-fetch';
import { request as config } from '../config';

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJson (response) {
  return response.json();
}

function request (url, options = {}) {
return Promise.race([
  fetch(url, { credentials: 'include', ...options })
    .then(checkStatus)
    .then(parseJson)
    .then(data => data)
    .catch(err => err),
  new Promise(
    (resolve, reject) => {
      setTimeout(
        () => reject(`请求超时-${url}`),
        options.timeOut || config.timeOut
      );
    }
  ),
])
}

export default {
request,
}