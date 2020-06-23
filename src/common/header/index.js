import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
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


class Header extends Component {

    getListArea = () => {
        const {focused, list, page, totalPage, mouseIn, handleMouseIn, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>
                        {newList[i]}
                    </SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseIn}
                            onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe6a6;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    };

    render() {
        const {focused, handleInputFocus, handleInputBlur, list, login, logOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载APP</NavItem>
                    {
                        login ?
                            <NavItem className={'right'} onClick={logOut}>退出</NavItem>
                            :
                            <Link to='/login'>
                                <NavItem className={'right'}>登陆</NavItem>
                            </Link>
                    }
                    {/*<NavItem className={'right'}>登陆</NavItem>*/}
                    <NavItem className={'right'}>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused} timeout={200} classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={() => {
                                           handleInputFocus(list)
                                       }}
                                       onBlur={handleInputBlur}>

                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className={'writing'}>
                            <span className="iconfont ">&#xe6b0;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            // list.size === 0 && dispatch(actionCreators.getList());//위 코드의 다른 형식
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseIn() {
            dispatch(actionCreators.mouseIn());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            let originalAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originalAngle) {
                originalAngle = parseInt(originalAngle, 10);
                // console.log(originalAngle)
            } else {
                originalAngle = 0;
                // console.log('mei you zhi')
            }
            spin.style.transform = 'rotate(' + (originalAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },

        logOut() {
            dispatch(loginActionCreators.logOut())
        }

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header)