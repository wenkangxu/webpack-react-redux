/*
 * @Author: XuWenKang
 * @Description: description
 * @Date: 2018-04-10 10:25:55
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-10 13:58:25
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import { withRouter } from 'react-router-dom';

@withRouter
export default class MainLayout extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);
    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftBox}>
          nav导航
        </div>
        <div className={styles.rightBox}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

