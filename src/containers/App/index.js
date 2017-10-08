import React,{Component} from 'react';
import Tab from "../../components/Tab/index";
export default class Wrapper extends Component{
    render(){
        return (
            <div>
              {this.props.children}
              <Tab/>
            </div>
        )
    }
}