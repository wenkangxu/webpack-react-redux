/*
 * @Author: XuWenKang
 * @Description: api生成器
 * @Date: 2018-04-13 13:47:47
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 15:29:19
*/

import { request } from './request';
import { url as urlHelper } from '../helper';

export default function createApi () {
  return {
    get(url, query = {}, options) {
      const queryString = urlHelper.stringify(query);
      return request(
        `${url}?${queryString}`,
        {
          method: 'GET',
          ...options,
        }
      )
    },
    post(url, query = {}, options) {
      return request(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
          ...options,
        }
      )
    }
  }
}