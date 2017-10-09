import * as types from '../action-types';
let initState = {
  user:null,
  error:null,
  success:null
};
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case types.USER_REG:
      return {...state,...action.payload};
    default:
      return state;
  }
}