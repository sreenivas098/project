import React from 'react';
import Login from './Login';
import HomePage from "./components/HomePage"
import Home from './Home';

import Signup from "./components/Accounts/Signup";
import Event from "./components/Event";
import Auth from "./components/Auth";
import About from "./components/About"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Switch>
        <Route exact path="/" ><HomePage /> </Route>
        <Route exact path="/event" ><Event /> </Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/about"><About /></Route>
          <Auth exact path="/home" component={Home} />





    </Switch>
   </Router>
  );
}

export default App;
