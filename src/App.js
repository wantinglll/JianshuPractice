import React, { Component } from "react";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from "./store";
import { useLocation, useNavigate } from 'react-router-dom';

export function withRouter( Child ) {
    return ( props ) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child { ...props } navigate={ navigate } location={ location } />;
    }
};

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path='/' exact element={<Home/>} />
                            <Route path='/detail/:id' exact element={<Detail/>} />
                            <Route path='/login' exact element={<Login/>} />
                            <Route path='/write' exact element={<Write/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    };
};

export default App;
