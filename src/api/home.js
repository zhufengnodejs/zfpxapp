/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get,post} from './index';
//所有的接口方法都加s
export const getSliders = ()=>{
  return get('/sliders');
}