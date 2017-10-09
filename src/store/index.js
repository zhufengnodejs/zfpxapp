/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
let store = applyMiddleware(thunk)(createStore)(reducer);
window.store = store;
export default store;