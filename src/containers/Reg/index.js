import React, {Component} from 'react';
import './index.less'
import NavHeader from "../../components/NavHeader/index";
import {Link} from 'react-router-dom';
import avatar from '../../images/profile.png';
import {connect} from 'react-redux';
import actions from '../../store/actions/user';
@connect(
  state => state.userInfo,
  actions
)
export default class Reg extends Component {
  handleClick = () => {
    this.props.reg({mobile: 'zfpx', password: '123456'});
  }

  render() {
    return (
      <div className="reg">
        <NavHeader title="注册"/>
        <div className="avatar">
          <img src={avatar}/>
        </div>
        <ul className="forms">
          <li><input type="text" placeholder="手机号"/></li>
          <li><input type="text" placeholder="密码"/></li>
          <li><Link to="/login">前往登录</Link></li>
          <li>
            <button onClick={this.handleClick}>注册</button>
          </li>
          <li>
            <div className="hint">
              {this.props.error}
              {this.props.success}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}