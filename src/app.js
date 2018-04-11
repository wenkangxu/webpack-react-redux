/*
 * @Author: XuWenKang
 * @Description: description
 * @Date: 2018-04-10 10:25:16
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-11 16:08:46
 */
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import 'babel-polyfill';
import styles from './css/index.less';
import { Button } from 'antd';
import Routers from './router';

const element = document.createElement('div');
element.id = 'app';

ReactDom.render(
  <Routers />,
  element
)

document.getElementsByTagName('body')[0].appendChild(element);