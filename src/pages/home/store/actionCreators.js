import axios from "axios";
import {constants} from "../store";
import {fromJS} from "immutable";

export const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList:result.writerList
});
export const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage: fromJS(nextPage)
});

export const getInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(() => {
            console.log('Error!')
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        }).catch(() => {
            console.log('Error!')
        })

    }
};
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
});