import React, { PureComponent } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { connect } from "react-redux";
import {Input, LoginBox, LoginWrapper, Button} from "./style";
import {actionCreators} from './store';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return (
                <Routes>
                    <Route path="*" element={<Navigate to="/" replace />}/>
                </Routes>
            )
        }
    }
};

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem){
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapState,mapDispatch)(Login);