import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import 'babel-polyfill';
import printMe from './print.js';
import { cube } from './util/util'; //square并没有被使用
import styles from './css/index.less';

export default class MyComponent extends PureComponent {
  render() {
    return (
      <div className={styles.index}>
        cube(222).val222ue = 
        {cube(222)}
      </div>
    )
  }
}
console.log('processbbb', process.env.NODE_ENV);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

const element = document.createElement('div');
element.id = 'app';

ReactDom.render(
  <MyComponent />,
  element
)

document.getElementsByTagName('body')[0].appendChild(element);