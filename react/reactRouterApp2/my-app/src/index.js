import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import BaseLayout from './layout/BaseLayout';
import NoMatch from './components/NoMatch';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    <BaseLayout>
        <Switch>
            {/* when user goes to home page, browserrouter switches to App view */}
            {/* without exact, everything after / would go to App */}
            <Route exact path="/" component={App} /> 
            <Route exact path="/blogs" component={Blogs} /> 
            <Route path="/blogs/:blogID" component={Blogs} /> 
            {/* <Redirect from="/aboutus" to="/contactus" /> */}
            <Route path="/aboutus" component={AboutUs} /> 
            <Route path="/contactus" component={ContactUs} /> 
            <Route component={NoMatch} />

        </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    , document.getElementById('root'));


    // SWITCH STATEMENT
    // switch("something"){
    //     case 1:
    //         break;
    //     case 2:
    //         break;
    //     default:
    //         break;
    // }


