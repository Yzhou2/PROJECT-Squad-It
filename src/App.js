import React, { Component } from 'react';
import Router from './router';
// import Landing from './components/Landing';
import './App.css';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';




class App extends Component {
  render() {
    return (
      <div className="body">
        <Router />

      </div>
    );
  }
}

export default App;
