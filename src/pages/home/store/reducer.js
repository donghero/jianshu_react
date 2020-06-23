import {fromJS} from "immutable";
import {constants} from "../store";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList:[],
    articlePage: 1,
    showScroll: false

});
const CHANGE_HOME_DATA = (state, action) => {
    return state.merge(
        {
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            writerList: fromJS(action.writerList),
        }
    );
};
const ADD_HOME_LIST = (state, action) => {
    return state.merge(
        {
            articleList: state.get('articleList').concat(action.list),
            articlePage: action.nextPage
        }
    );
};
const TOGGLE_SCROLL_TOP = (state, action) => {
    return state.set('showScroll', action.show);
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            // return state.set('topicList',fromJS(action.topicList));
            return CHANGE_HOME_DATA(state, action);
        case constants.ADD_HOME_LIST:
            return ADD_HOME_LIST(state, action);
        case constants.TOGGLE_SCROLL_TOP:
            return TOGGLE_SCROLL_TOP(state, action);
        default:
            return state
    }

}

