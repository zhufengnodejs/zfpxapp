import React from 'react';
import {render} from 'react-dom';
import './common/index.less'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App/index";
import store from './store';
import {Provider} from 'react-redux';
import Detail from "./containers/Home/Detail/index";
render(
  <Router>
    <Provider store = {store}>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/lesson" component={Lesson}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </App>
    </Provider>
  </Router>
  , document.querySelector('#app'));