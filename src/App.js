import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import Router from './Router';



class App extends Component {
  render() {
    return (
      <div className="body">

      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route path="/logged" component={ Router } />
      </Switch>
      </div>
    );
  }
}

export default App;
