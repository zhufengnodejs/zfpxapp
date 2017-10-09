/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
let initState = {currentLesson:0,sliders:[]};
export default function(state=initState,action){
  switch(action.type){
    case types.CHANGE_LESSON:
      return {...state,currentLesson:action.currentLesson};
    case types.FETCH_SLIDERS:
      return {...state,sliders:action.sliders};
    default:
      return state;
  }
}