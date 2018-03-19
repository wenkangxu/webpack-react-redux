import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import printMe from './print.js';
import { cube } from './util/util'; //square并没有被使用
import styles from './less/index.less';

export default class MyComponent extends PureComponent {
  render() {
    return (
      <div className={styles.index}>
        cube(222) = 
        {cube(222)}
      </div>
    )
  }
}

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

ReactDom.render(
  <MyComponent />,
  document.getElementsByTagName('body')[0]
)