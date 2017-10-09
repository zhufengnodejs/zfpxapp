/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
import {regs, logins} from '../../api/user';
import {push } from 'react-router-redux'
export default {
  reg(user){
    return function (dispatch, getState) {
      regs(user).then(result => {
        console.log(result);
        let {code, success, error, user} = result;
        let payload = {};
        if (code == 0) {//成功
          payload = {success, user, error: null};
        } else {
          payload = {error, success: null, user: null};
        }
        dispatch({type: types.USER_REG, payload});
        if (code == 0) {//成功
          dispatch(push('/login'));
        }
      })
    }
  }
}