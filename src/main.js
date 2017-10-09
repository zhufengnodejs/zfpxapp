import React from 'react';
import {render} from 'react-dom';
import './common/index.less'
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App/index";
import store from './store';
import {Provider} from 'react-redux';
import Detail from "./containers/Detail/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
import {ConnectedRouter} from 'react-router-redux'
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/lesson" component={Lesson}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#app'));