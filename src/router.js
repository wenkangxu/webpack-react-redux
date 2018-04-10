/*
 * @Author: XuWenKang
 * @Description: 路由
 * @Date: 2018-04-10 10:25:21
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-10 13:18:34
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


// const MainLayout = (props) => (
//   <div>
//     <ul>
//       <li><Link to='/'>Home</Link></li>
//       <li><Link to='/login'>Login</Link></li>
//       <li><Link to='/about'>About</Link></li>
//       <li><Link to='/help'>Help</Link></li>
//     </ul>
//     <Route path='/help' component={() => <h2>help</h2>} />
//     <Route path='/about' component={() => <h2>about</h2>} />
//   </div>
// )

const renderMainLayout = (props) => (
  <MainLayout>
    <Switch>
      <Route path='/help' component={() => <h2>help</h2>} />
      <Route path='/about' component={() => <h2>about</h2>} />
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