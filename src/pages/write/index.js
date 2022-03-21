import React, { PureComponent } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { connect } from "react-redux";

class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if(loginStatus){
            return(
                <div>写文章</div>
            )
        }else{
            return (
                <Routes>
                    <Route path="*" element={<Navigate to="/login" replace />}/>
                </Routes>
            )
        }
    }
};

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});


export default connect(mapState,null)(Write);