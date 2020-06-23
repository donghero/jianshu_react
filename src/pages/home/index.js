import React, {PureComponent} from "react";
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import {connect} from "react-redux";
import {actionCreators} from "./store";


class Home extends PureComponent {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                         src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
                {/*<BackTop onClick={this.handleScrollTop}>Top</BackTop>*/}
            </HomeWrapper>
        )
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    };

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['homeHeader', 'showScroll'])
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getInfo();
            dispatch(action);
        },
        changeScrollShow() {
            if (document.documentElement.scrollTop > 100) {
                const action = actionCreators.toggleTopShow(true);
                dispatch(action);
            } else {
                const action = actionCreators.toggleTopShow(false);
                dispatch(action);
            }

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);