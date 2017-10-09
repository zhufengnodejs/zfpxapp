import React,{Component} from 'react';
import './index.less'
import NavHeader from "../../components/NavHeader/index";
import {Link} from 'react-router-dom';
import avatar from '../../images/profile.png';
export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <NavHeader title="登录"/>
                <div className="avatar">
                    <img src={avatar}/>
                </div>
                <ul className="forms">
                    <li><input type="text" placeholder="手机号"/></li>
                    <li><input type="text" placeholder="密码"/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li><button>登录</button></li>
                </ul>
            </div>
        )
    }
}