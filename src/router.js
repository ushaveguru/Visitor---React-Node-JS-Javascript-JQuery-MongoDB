import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import App from './components/App';
import Home from './components/home';

export default (

    <BrowserRouter>
    <div>
        <Route path="/" component={App} />
    </div>
    <div>
        <Route path="/home" component={Home} />
    </div>
    </BrowserRouter>
   
);