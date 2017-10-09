/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {createStore} from 'redux';
import reducer from './reducers';
let store = createStore(reducer);
window.store = store;
export default store;