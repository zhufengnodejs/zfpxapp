import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import Carousel from "./Carousel/index";
import LessonList from "./LessonList/index";
import {scroll} from '../../utils';
@connect(
  state => state.home,
  actions
)
export default class Home extends Component {
  componentDidMount() {
    if (this.props.lessons.list.length == 0) {
      this.props.fetchSliders();
      this.loadMore();
    } else {
      this.container.scrollTop = localStorage.getItem('scrollTop') || 0;
    }
    scroll(this.container, this.loadMore);
  }

  loadMore = () => {
    this.props.fetchLessons();
  }

  render() {
    return (
      <div>
        <HomeHeader
          changeLesson={this.props.changeLesson}
          currentLesson={this.props.currentLesson}/>
        <div ref={ref => this.container = ref} className="container">
          <Carousel sliders={this.props.sliders}/>
          <LessonList
            loadMore={this.loadMore}
            lessons={this.props.lessons}/>
        </div>
      </div>
    )
  }
}