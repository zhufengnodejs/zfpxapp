/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get,post} from './index';
//注册
export const regs = (user)=>{
  return post('/reg',user);
}
//登录
export const logins = (user)=>{
  return post('/login',user);
}