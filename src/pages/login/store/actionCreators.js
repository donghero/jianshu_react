import axios from "axios";
import {constants} from "./index";

export const changeLogIn = () => ({
    type: constants.LOG_IN,
    value: true

});

export const logIn = (id, password) => {
    return (dispatch) => {
        axios.get('api/login.json?id=' + id + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogIn())
            } else {
                alert('登陆失败')
            }
        }).catch(() => {
            console.log('Error!')
        })

    }
};

export const logOut = () => ({
    type: constants.LOG_OUT,
    value: false
});



