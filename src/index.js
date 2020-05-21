import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Marketplace from "./components/Marketplace"
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// import Login from './features/Login';
// import Home from './features/Home';

// const customHistory = createBrowserHistory();
  {/* <Router history={customHistory}> */}

const Root = () => {
 return (
    <Router>
   <Switch>
    {/* <Route path="/login" component={Login} /> */}
    <Route exact path="/" component={App} />
    <Route path="/marketplace" component={Marketplace} />

    {/* <Redirect from="/" to="/login" /> */}
   </Switch>
  </Router> 
 )
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
