/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
export default {
  changeLesson(currentLesson){
    return {
      type:types.CHANGE_LESSON,
      currentLesson
    }
  },
  fetchSliders(){
    return function(dispatch){
      getSliders().then(sliders=>{
        dispatch({type:types.FETCH_SLIDERS,sliders});
      })
    }
  },
  fetchLessons(){
    return function(dispatch){
      dispatch({type:types.FETCH_LESSONS});
      getLessons().then(lessons=>{
        console.log(lessons);
        dispatch({type:types.FETCH_LESSONS_SUCCESS,...lessons});
      })
    }
  }
}