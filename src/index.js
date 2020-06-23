import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style';
import {IconGlobalStyle} from './statics/iconfont/iconfont';

ReactDOM.render(
    <div>
        <GlobalStyle/>
        <IconGlobalStyle/>
        <App/>
    </div>,
    document.getElementById('root')
);


