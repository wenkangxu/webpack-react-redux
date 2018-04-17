/*
 * @Author: XuWenKang
 * @Description: description
 * @Date: 2018-04-13 15:31:03
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 17:39:24
*/

import util from '../util';
import common from './common';
const { apiCreator } = util;

const api = apiCreator();

export default {
  // 暴露api底层方法
  ...api,
  // 公共接口
  common: common(api),
};