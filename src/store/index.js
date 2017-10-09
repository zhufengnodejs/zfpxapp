/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
const history = createHistory()
const middleware = routerMiddleware(history)
let store = applyMiddleware(thunk,middleware)(createStore)(reducer);
window.store = store;
export default store;