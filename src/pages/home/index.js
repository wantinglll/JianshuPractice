import React, { PureComponent } from "react";
import List from './components/List';
import Recommend from './components/Recommend';
import Writers from './components/Writers';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import { connect } from "react-redux";
import { actionCreators } from './store';

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <a href="https://www.jianshu.com/activity?utm_medium=index-banner&utm_source=desktop" target="_blank">
                        <img  className="banner-img" src="https://cdn.jsdelivr.net/gh/wantinglll/JianshuPractice@main/src/statics/348f9e194f4062a17f587e2963b7feb0b0a5a982.png"/>
                    </a>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writers />
                </HomeRight>
                {this.props.showTopButton ? <BackTop onClick={this.handleScrollTop}>&#xe76c;</BackTop> : null}
            </HomeWrapper>
        )
    };

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    };

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    };
}

const mapState = (state) => ({
    showTopButton: state.getIn(['home','showTopButton'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(e){
        if (document.documentElement.scrollTop > 50) {
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState, mapDispatch)(Home);