/*
 * @Author: XuWenKang
 * @Description: 路由
 * @Date: 2018-04-10 10:25:21
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-11 14:06:51
 */
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import MainLayout from './route/mainLayout/Home';
import Wrapper from './route/wrapper/Home';
import Login from './route/login/Home';
import Help from './route/help/Home';
import About from './route/about/Home';

//右侧内容路由
const routes = [
  { path: '/help', component: Help },
  { path: '/about', component: About },
]

// 递归创建路由
function recursiveRouter(routeArray, parentPath = '') {
  return routeArray.map(({ path, component, children }) => {
    const recursivePath = parentPath + path;
    if (!children) {
      return (<Route exact key={recursivePath} path={recursivePath} component={component} />);
    }
    return (
      <Switch key={recursivePath}>
        <Route exact path={recursivePath} component={component} />
        {recursiveRouter(children, recursivePath)}
      </Switch>
    );
  });
}

const renderMainLayout = (props) => (
  <MainLayout>
    <Switch>
      {recursiveRouter(routes)}
    </Switch>
  </MainLayout>
)

const Routers = () => (
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/' render={renderMainLayout} />
      </Switch>
    </Wrapper>
  </Router>  
)

export default Routers;