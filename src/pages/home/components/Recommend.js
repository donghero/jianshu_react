import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {RecommendWrapper, RecommendItem} from "../style";

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper key={list.get('id')}>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                        )

                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['homeHeader', 'recommendList'])
    }
};
export default connect(mapStateToProps, null)(Recommend);