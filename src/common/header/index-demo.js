import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import
{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
}
    from "./style";

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>Tokyo</SearchInfoItem>
                    <SearchInfoItem>동경</SearchInfoItem>
                    <SearchInfoItem>东京</SearchInfoItem>
                    <SearchInfoItem>China</SearchInfoItem>
                    <SearchInfoItem>중국</SearchInfoItem>
                    <SearchInfoItem>中国</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
};
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className={'left active'}>首页</NavItem>
                <NavItem className={'left'}>下载APP</NavItem>
                <NavItem className={'right'}>登陆</NavItem>
                <NavItem className={'right'}>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused} timeout={200} classNames="slide"
                    >
                        <NavSearch className={props.focused ? 'focused' : ''}
                                   onFocus={props.handleInputFocus}
                                   onBlur={props.handleInputBlur}>

                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</span>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className={'writing'}>
                    <span className="iconfont">&#xe6b0;</span>
                    写文章
                </Button>
                <Button className={'reg'}>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header)