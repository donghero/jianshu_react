import React, {PureComponent} from "react";
import {TopicWrapper, TopicItem} from "../style";
import {connect} from "react-redux";

class Topic extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get("id")}>
                                <img
                                    className="topic-pic"
                                    src={item.get("imgUrl")}
                                    alt=""
                                />
                                {item.get("title")}
                            </TopicItem>
                        );
                    })
                }

            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['homeHeader', 'topicList'])
    }
};

export default connect(mapStateToProps, null)(Topic);