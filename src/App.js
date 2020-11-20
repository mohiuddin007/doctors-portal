import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetAppointment from './components/GetAppointment/GetAppointment';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path="/get-appointment">
            <Header/>
            <GetAppointment/>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
             <NoMatch/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
