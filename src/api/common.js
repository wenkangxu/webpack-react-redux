/*
 * @Author: XuWenKang
 * @Description: 公共api
 * @Date: 2018-04-13 15:34:55
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 15:37:28
 */

 export default function (api) {
   return {
     getLeftNavList: query => api.get('api/getLeftNavList', {})
   }
 }