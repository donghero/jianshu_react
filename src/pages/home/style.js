import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
 `;
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
        }
 `;
export const HomeRight = styled.div`
    width:280px;
    float:right;
 `;
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
        }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
        }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
        }
    `;

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => {
    return props.imgUrl
}});
    background-size:contain;
    margin-bottom: 6px;
    border-radius: 4px;
`;
//need to modify my code
export const WriterWrapper = styled.div`
    width:278px;
    margin-top:114px;
    border-radius:3px;
    height:300px;
`;
export const WriterRecommend=styled.div`
    .w_recommend{
        float:left;
        font-size: 14px;
        color: #969696;
    }
     .w_change{
        float:right;
        font-size: 14px;
        color: #969696;
    }
    .iconfont{
        float:right;
        color: #969696;
        margin-right:5px;
        }
`;
export const WriterItem=styled.div`
    width:280px;
    float:left;
    margin-top:15px;
    line-height:20px;
`;
export const WriterImg=styled.div`
    width:48px;
    height:48px;
    float:left;
    margin-right:10px;
    .w_pic{
        display:block;
        width:100%;
        height:100%;
        border-radius:50%;
        border:1px solid #ddd;
        cursor:pointer;
    }
`;
export const WriterInfo=styled.div`
    float:left;
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    .desc{
        margin-top:2px;
        font-size: 12px;
        color: #969696;
    }
`;
export const WriterFollow=styled.div`
    float:right;
   .follow{
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor:pointer;
    }
`;
//
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
`;