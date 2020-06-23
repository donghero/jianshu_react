import React, {Component} from "react";
import Header from "./common/header";
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Writer from "./pages/write";
import {Provider} from "react-redux"


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/write' exact component={Writer}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }

}

export default App;
