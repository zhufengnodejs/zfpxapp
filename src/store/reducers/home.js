import * as types from '../action-types';
let initState = {
  currentLesson: 0,
  sliders: [],
  lessons: {        //滚动到底部刷新
    loading: false, //是否正在加载
    list: [],       //课程列表
    hasMore: true,  //是否更有更多
    limit: 5,       //限定返回的条数
    offset: 0       //偏移量
  }
};
export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_LESSON:
      return {...state, currentLesson: action.currentLesson};
    case types.FETCH_SLIDERS:
      return {...state, sliders: action.sliders};
    case types.FETCH_LESSONS:
      return {
        ...state, lessons: {
          ...state.lessons,
          loading: true
        }
      };
    case types.FETCH_LESSONS_SUCCESS:
      return {
        ...state, lessons: {
          ...state.lessons,
          list: [...state.lessons.list,...action.list],
          hasMore: action.hasMore,
          limit: action.limit || 5,
          offset: state.lessons.offset + action.list.length,
          loading: false
        }
      };
    default:
      return state;
  }
}