// import * as  constants from './constants'
import {constants} from './index';
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
});
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseIn = () => ({
    type: constants.MOUSE_IN
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});
export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then((res) => {
            const action = changeList(res.data.data);
            dispatch(action);
        }).catch(() => {
            console.log('Error!')
        })
    }
};