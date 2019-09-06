import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ProfileHome from './Components/ProfileHome';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/profile/:userid' component={ProfileHome}/>
            <Route path='/home' component={App}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/' component={LoginPage}/>
        </Switch>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
