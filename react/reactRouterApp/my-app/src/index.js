import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieList from './MovieList';
import AllMovies from './AllMovies';
import BaseLayout from './BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <BaseLayout> 
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/allmovies' component={AllMovies}/>
            <Route path='/movielist' component={MovieList}/>
            <Route path='/movielist/:movieID' component={MovieList}/>
        </Switch>
    </BaseLayout>
    </BrowserRouter>
    
    , document.getElementById('root'));


