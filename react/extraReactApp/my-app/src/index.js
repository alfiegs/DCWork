import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes1 from './components/PropTypes1';
import RefExample from './components/RefExample';
import Hooks from './components/Hooks';
import ConditionalRendering from './components/ConditionalRendering';
import LifeCycle from './components/LifeCycle';
import ParentLifeCycle from './components/ParentLifeCycle';
import BaseLayout from './layout/BaseLayout';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} /> 
                <Route exact path="/example1" component={PropTypes1} /> 
                <Route exact path="/example2" component={ConditionalRendering} /> 
                <Route exact path="/example3" component={RefExample} /> 
                <Route exact path="/example4" component={Hooks} /> 
                <Route exact path="/example5" component={LifeCycle} /> 
                <Route exact path="/example6" component={ParentLifeCycle} /> 
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    , document.getElementById('root'));


    