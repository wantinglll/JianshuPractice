import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";


function Detail (props) {
    const { title, content, getDetail} = props;
    const { id } = useParams();

    useEffect(() => {
        getDetail();

    }, [getDetail, id]
    );

    return(
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html:content}}/>
        </DetailWrapper>
    )
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => {
    return{
        getDetail(id){
            dispatch(actionCreators.getDetail(id))
        }
    }
};

export default connect(mapState,mapDispatch)(Detail);