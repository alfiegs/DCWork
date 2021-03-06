import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//(what you want to render (<App />), where you want to render it)
//every subcomponent gets added to App component (App <-- navbar, body, footer)
//every subcomponent can have subcomponents added to it (body <-- content1, content2, etc.)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
