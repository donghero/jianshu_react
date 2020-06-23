import {fromJS} from "immutable";
import {constants} from "../store";

const defaultState = fromJS({
    login: false
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOG_IN:
            return state.set('login', action.value);
        case constants.LOG_OUT:
            return state.set('login', action.value);
        default:
            return state
    }

}

