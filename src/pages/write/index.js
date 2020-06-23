import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"

class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (loginStatus) {
            return (
                <div>write something</div>
            );
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}

};

export default connect(mapStateToProps, mapDispatchToProps)(Write);