import React, {PureComponent} from "react";
import {DetailWrapper, Content, Header} from "./style";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {actionCreators} from "./store";

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id) {
            const action = actionCreators.getDetail(id);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));