import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {LoginWrapper, LoginBox, Input, Button} from "./style";
import {actionCreators} from "./store";
import {Redirect} from "react-router-dom"

class Login extends PureComponent {
    render() {
        const {loginStatus, logIn} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={"id"} ref={(input) => {
                            this.id = input
                        }}/>
                        <Input placeholder={"password"} type="password" ref={(input) => {
                            this.password = input
                        }}/>
                        <Button onClick={() => {
                            logIn(this.id, this.password)
                        }}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/'> </Redirect>
        }

    }

}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])

    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        logIn(id, password) {
            dispatch(actionCreators.logIn(id.value, password.value));

        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);