import axios from 'axios';
import {constants} from './index';
import {fromJS} from 'immutable';


export const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title: fromJS(title),
    content: fromJS(content)

});
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        }).catch(() => {
            console.log('Error!')
        })

    }

};