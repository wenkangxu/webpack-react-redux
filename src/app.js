import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
// import printMe from './print.js';

export default class MyComponent extends PureComponent {
  render() {
    return (
      <div>11bbbbb22222111</div>
    )
  }
}


ReactDom.render(
  <MyComponent />,
  document.getElementsByTagName('body')[0]
)