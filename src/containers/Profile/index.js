import React, {Component} from 'react';
import './index.less'
import profile from '../../images/profile.png';
import {Link} from 'react-router-dom';
export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="user-login">
          <img src={profile}/>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}