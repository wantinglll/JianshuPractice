import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
        margin-bottom: 5px;
        };
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 40px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`;
export const RecItem = styled.div`
    width: 280px;
    margin: 30px 0;
`;
export const RecInfo = styled.div`
   width: 280px;
   height: 50px;
   margin-bottom: 6px;
   background: url(${(props) => props.imgUrl});
   background-size: contain;
`;
export const WriterWrapper = styled.div`
    width: 280px;
    height: 295px;
    font-size: 14px;
    text-align: left;
`;
export const WriterTitle = styled.div`
    color: #969696;
`;
export const WriterInfoSwitch = styled.div`
    float: right;
    display: inline-block;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 3px;
        transition: all .2s ease-in;
        transform-origin: center center;}
`;
export const WriterList = styled.div`
    width: 280px;
    display: block;
    line-height: 20px;
    margin-top: 15px;
    padding: 0;
    .pic {
        display: block;
        width: 46px;
        height: 46px;
        margin-right: 12px;
        border: 1px solid #ddd;
        border-radius: 50%;
        cursor: pointer;
        float:left;
    }
`;

export const WriterInfo = styled.div`
    a {
        text-decoration: none;
        color: #333;
    }
    .name{
        margin-right: 60px;
        padding-top: 5px;
        display: block;
    }
    .follow{
        float: right;
        line-height: normal;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        font-weight: 400;
    }
    p {
        margin-top: 2px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #969696;
    }
`;