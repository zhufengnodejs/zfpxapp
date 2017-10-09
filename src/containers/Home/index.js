import React,{Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import Carousel from "./Carousel/index";
import LessonList from "./LessonList/index";
@connect(
  state=>state.home,
  actions
)
export default class Home extends Component{
    componentDidMount(){
        this.props.fetchSliders();
        this.loadMore();
    }
    loadMore = ()=>{
      this.props.fetchLessons();
    }
    render(){
      console.log(this.props.lessons);
      return (
            <div>
              <HomeHeader
                changeLesson={this.props.changeLesson}
                currentLesson={this.props.currentLesson} />
              <div className="container">
                <Carousel sliders = {this.props.sliders}/>
                <LessonList
                  loadMore = {this.loadMore}
                  lessons={this.props.lessons}/>
              </div>
            </div>
        )
    }
}