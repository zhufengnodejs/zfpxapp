/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import home from './home';
import userInfo from './userInfo';
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
  home,
  routing: routerReducer,
  userInfo
})