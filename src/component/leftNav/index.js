/*
 * @Author: XuWenKang
 * @Description: 左侧导航
 * @Date: 2018-04-11 14:12:52
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-11 16:08:08
 */

 import React, { PureComponent } from 'react';
 import PropTypes from 'prop-types';
 import { autobind } from 'core-decorators';
 import { Menu, Icon, Button } from 'antd';
 import { Link } from "react-router-dom";
 import styles from './index.less'
 const SubMenu = Menu.SubMenu;
 const Item = Menu.Item;

 export default class LeftNav extends PureComponent {
   static propTypes = {

   }

   static defaultProps = {

   }
   
   constructor(props) {
     super(props);
     this.state = {
      
     }
   }

   render() {
    return (
      <div className={styles.navBox}>
        <Menu
          defaultSelectKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          theme='dark'
        >
          <Item key='1'>
            <Icon type='desktop' />
            <span>
              <Link className={styles.link} to='/'>Home</Link>
            </span>
          </Item>
          <Item key='2'>
            <Icon type='pie-chart' />
            <span>
              <Link className={styles.link} to='/about'>About</Link>
            </span>
          </Item>
          <Item key='3'>
            <Icon type='inbox' />
            <span>
              <Link className={styles.link} to='/help'>Help</Link>
            </span>
          </Item>
        </Menu>
      </div>
    )
   }
 }