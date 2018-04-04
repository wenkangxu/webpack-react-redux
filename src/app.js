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