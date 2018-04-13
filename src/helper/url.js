/*
 * @Author: XuWenKang
 * @Description: 此处存放与url数据相关的通用方法
 * @Date: 2018-04-13 14:55:43
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 14:56:03
*/

import qs from 'query-string';

const url = {
  /**
   * 将url上的参数字符串，转化成JS对象
   * @param {String} search url上的参数字符串
   * @returns {Objcet}
   */
  parse(search) {
    return qs.parse(search) || {};
  },
  /**
   * 将JS对象转化成url上的参数字符串
   * @param {Object} query={} 需要转换成字符串的对象
   * @returns {String} 无?号的url参数字符串
   */
  stringify(query = {}) {
    return qs.stringify(query);
  },
  /**
   * 将url转化为对象
   * @param {String} url
   * @returns {Object} 包含pathname,query的对象
   */
  parseUrl(inputUrl = '') {
    const match = /([^?]*)\?(.*)/.exec(inputUrl);
    const pathname = match[1];
    const query = this.parse(match[2]);
    return {
      pathname,
      query,
    };
  },
  /**
   * 检查当前页面路径是否匹配指定路径的子路由
   * @param {String} route 当前子路由
   * @param {String} pathname 当前页面路径
   */
  matchRoute(route, pathname) {
    return RegExp(route).test(pathname);
  },
};

export default url;
