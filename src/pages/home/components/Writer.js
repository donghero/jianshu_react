import React, {PureComponent} from "react";
import {WriterWrapper, WriterItem, WriterImg, WriterInfo, WriterFollow, WriterRecommend} from "../style";
import {connect}from"react-redux";

class Writer extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterRecommend>
                    <p className="w_recommend">推荐作者</p>
                    <span className="w_change">换一换</span>
                    <span className="iconfont spin">&#xe6a6;</span>
                </WriterRecommend>
                    {
                        list.map((item,index)=>{
                            return(
                                <WriterItem  key={index}>
                                    <WriterImg>
                                        <img
                                            className="w_pic"
                                            src={item.get('imgUrl')}
                                            alt=""
                                        />
                                    </WriterImg>
                                    <WriterInfo>
                                        <p className="name">{item.get('name')}</p>
                                        <p className="desc">{item.get('desc')}</p>
                                    </WriterInfo>
                                    <WriterFollow>
                                        <p className="follow">+ 关注</p>
                                    </WriterFollow>
                                </WriterItem>
                            )
                        })
                    }

            </WriterWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        list:state.getIn(['homeHeader','writerList'])
    }

};
export default connect(mapStateToProps,null)(Writer);