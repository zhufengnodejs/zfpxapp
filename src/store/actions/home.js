/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
export default {
  changeLesson(currentLesson){
    return {
      type:types.CHANGE_LESSON,
      currentLesson
    }
  }
}