import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes1 from './components/PropTypes1';
import RefExample from './components/RefExample'
import ConditionalRendering from './components/ConditionalRendering'
import BaseLayout from './layout/BaseLayout'

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} /> 
                <Route exact path="/example1" component={PropTypes1} /> 
                <Route exact path="/example2" component={ConditionalRendering} /> 
                <Route exact path="/example3" component={RefExample} /> 
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    , document.getElementById('root'));


    