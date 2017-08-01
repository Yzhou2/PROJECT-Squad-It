import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing';

export default function(){
  return (
  <div>
  <Switch>
    <Route  component={ Landing }  exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />
  </Switch>
  </div>
)}
