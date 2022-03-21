import React, { PureComponent } from "react";
import { WriterWrapper, WriterList, WriterInfo, WriterTitle,WriterInfoSwitch } from "../style";
import { connect } from "react-redux";
import  { actionCreators } from "../store";

class Writers extends PureComponent {
    render() {
        const {list,handleChangeWriters, page, totalPage} = this.props;
        return(
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <WriterInfoSwitch onClick={()=> handleChangeWriters(page, totalPage, this.spinIcon)}>
                        <span className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe615;</span>
                        换一批
                    </WriterInfoSwitch>
                </WriterTitle>
                <WriterList>
                {list.map((item) => {
                    return(
                        <div key={item.get('id')}>
                            <a href={item.get('url')} target="_blank">
                                <img className="pic" src={item.get('imgUrl')} alt=""/>
                            </a>
                            <WriterInfo>
                                <a className="follow"
                                   href="https://www.jianshu.com/u/c5a2ce84f60b?utm_source=desktop&utm_medium=index-users"
                                   state="0">
                                    <span className="iconfont">&#xeaf3;</span>"关注"
                                </a>
                                <a href={item.get('url')} target="_blank" className="name">
                                    {item.get('name')}
                                </a>
                                <p>{item.get('desc')}</p>
                            </WriterInfo>
                        </div>
                    )}
                )
                }
                    </WriterList>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
});

const mapDispatch = (dispatch) => ({
    handleChangeWriters(writerPage, writerTotalPage, spin){
        spin.style.transform = spin.style.transform + 'rotate(360deg)';
        if (writerPage < writerTotalPage ){
            dispatch(actionCreators.changeWriters(writerPage + 1));
        }else{
            dispatch(actionCreators.changeWriters(1));
        }
    }
})
export default connect(mapState, mapDispatch)(Writers);