import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detail} from '../pages/detail/store';
import {reducer as login} from '../pages/login/store'

export default combineReducers({
    header: headerReducer,
    homeHeader: homeReducer,
    detail: detail,
    login: login
});
