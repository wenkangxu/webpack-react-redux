import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

const MainLayout = (props) => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/help'>Help</Link></li>
    </ul>
    {/* {props.children} */}
    <Route path='/help' component={() => <h2>help</h2>} />
    <Route path='/about' component={() => <h2>about</h2>} />
  </div>
)

const Routers = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/login' component={() => <h2>login</h2>} />
        {/* <MainLayout>
          <Route exact path='/' component={() => <h2>empty</h2>} />
          <Route path='/help' component={() => <h2>help</h2>} />
          <Route path='/about' component={() => <h2>about</h2>} />
        </MainLayout> */}
        <Route path='/' component={MainLayout} />
      </Switch>
    </div>
  </Router>  
)

export default Routers;