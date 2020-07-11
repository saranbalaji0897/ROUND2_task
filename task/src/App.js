import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { LandingPage } from './landingpage';
import { list, List } from './list';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
         <Route exact path="/list" component={List}></Route>
        <Route exact path="/" component={LandingPage}></Route>
       
      </Router>
    );
  }
}

export default App;
